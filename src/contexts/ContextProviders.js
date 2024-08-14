import { LightModeContext } from "./LightModeContext";
import { PageContext } from "./PageContext";
import { LoginViewContext } from "./LoginViewContext";
import { ContainerViewContext } from "./ContainerViewContext";
import { OpenChatWindowContext } from "./OpenChatWindowContext";
import { MainViewContext } from "./MainViewContext";

const ContextProviders = ({
  children,
  isLightMode,
  setIsLightMode,
  page,
  setPage,
  loginPageView,
  setLoginPageView,
  mainView,
  setMainView,
  containerView,
  setContainerView,
  openChatWindow,
  setOpenChatWindow,
}) => {
  return (
    <LightModeContext.Provider value={{ isLightMode, setIsLightMode }}>
      <PageContext.Provider value={{ page, setPage }}>
        <LoginViewContext.Provider value={{ loginPageView, setLoginPageView }}>
          <MainViewContext.Provider value={{ mainView, setMainView }}>
            <ContainerViewContext.Provider
              value={{ containerView, setContainerView }}
            >
              <OpenChatWindowContext.Provider
                value={{ openChatWindow, setOpenChatWindow }}
              >
                {children}
              </OpenChatWindowContext.Provider>
            </ContainerViewContext.Provider>
          </MainViewContext.Provider>
        </LoginViewContext.Provider>
      </PageContext.Provider>
    </LightModeContext.Provider>
  );
};

export default ContextProviders;
