import { LightModeContext } from "./LightModeContext";
import { LoginViewContext } from "./LoginViewContext";
import { ContainerViewContext } from "./ContainerViewContext";
import { OpenChatWindowContext } from "./OpenChatWindowContext";
import { LoginStateContext } from "./LoginStateContext";
import { UserContext } from "./UserContext";
import { PeopleContext } from "./PeopleContext";
import { PostsContext } from "./PostsContext";
import { SelectedPersonIdContext } from "./SelectedPersonIdContext";

const ContextProviders = ({
  children,
  isLightMode,
  isLoggedIn,
  setIsLoggedIn,
  setIsLightMode,
  loginPageView,
  setLoginPageView,
  containerView,
  setContainerView,
  openChatWindow,
  setOpenChatWindow,
  user,
  setUser,
  people,
  setPeople,
  posts,
  setPosts,
  selectedPersonId,
  setSelectedPersonId,
}) => {
  return (
    <LightModeContext.Provider value={{ isLightMode, setIsLightMode }}>
      <LoginStateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <LoginViewContext.Provider value={{ loginPageView, setLoginPageView }}>
          <ContainerViewContext.Provider
            value={{ containerView, setContainerView }}
          >
            <OpenChatWindowContext.Provider
              value={{ openChatWindow, setOpenChatWindow }}
            >
              <UserContext.Provider value={{ user, setUser }}>
                <PeopleContext.Provider value={{ people, setPeople }}>
                  <PostsContext.Provider value={{ posts, setPosts }}>
                    <SelectedPersonIdContext.Provider
                      value={{ selectedPersonId, setSelectedPersonId }}
                    >
                      {children}
                    </SelectedPersonIdContext.Provider>
                  </PostsContext.Provider>
                </PeopleContext.Provider>
              </UserContext.Provider>
            </OpenChatWindowContext.Provider>
          </ContainerViewContext.Provider>
        </LoginViewContext.Provider>
      </LoginStateContext.Provider>
    </LightModeContext.Provider>
  );
};

export default ContextProviders;
