import { PageContext } from "./PageContext";
import { LoginViewContext } from "./LoginViewContext";
import { ContainerViewContext } from "./ContainerViewContext";
import { OpenChatWindowContext } from "./OpenChatWindowContext";
import { MainViewContext } from "./MainViewContext";

const ContextProviders = ({
  children,
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
  );
};

export default ContextProviders;
