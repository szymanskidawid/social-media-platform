import { LightModeContext } from "./LightModeContext";
import { LoginViewContext } from "./LoginViewContext";
import { ContainerViewContext } from "./ContainerViewContext";
import { OpenChatWindowContext } from "./OpenChatWindowContext";
import { MainViewContext } from "./MainViewContext";
import { LoginStateContext } from "./LoginStateContext";
import { UserContext } from "./UserContext";
import { PeopleContext } from "./PeopleContext";

const ContextProviders = ({
  children,
  isLightMode,
  isLoggedIn,
  setIsLoggedIn,
  setIsLightMode,
  loginPageView,
  setLoginPageView,
  mainView,
  setMainView,
  containerView,
  setContainerView,
  openChatWindow,
  setOpenChatWindow,
  user,
  setUser,
  people,
  setPeople,
}) => {
  return (
    <LightModeContext.Provider value={{ isLightMode, setIsLightMode }}>
      <LoginStateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <LoginViewContext.Provider value={{ loginPageView, setLoginPageView }}>
          <MainViewContext.Provider value={{ mainView, setMainView }}>
            <ContainerViewContext.Provider
              value={{ containerView, setContainerView }}
            >
              <OpenChatWindowContext.Provider
                value={{ openChatWindow, setOpenChatWindow }}
              >
                <UserContext.Provider value={{ user, setUser }}>
                  <PeopleContext.Provider value={{ people, setPeople }}>
                    {children}
                  </PeopleContext.Provider>
                </UserContext.Provider>
              </OpenChatWindowContext.Provider>
            </ContainerViewContext.Provider>
          </MainViewContext.Provider>
        </LoginViewContext.Provider>
      </LoginStateContext.Provider>
    </LightModeContext.Provider>
  );
};

export default ContextProviders;
