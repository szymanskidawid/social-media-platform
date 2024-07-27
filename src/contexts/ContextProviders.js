import { PageContext } from './PageContext';
import { LoginViewContext } from './LoginViewContext';
import { ContainerViewContext } from './ContainerViewContext';
import { OpenChatWindowContext } from './OpenChatWindowContext';

const ContextProviders = ({
  children,
  page,
  setPage,
  loginPageView,
  setLoginPageView,
  containerView,
  setContainerView,
  openChatWindow,
  setOpenChatWindow,
}) => {
  return (
    <PageContext.Provider value={{ page, setPage }}>
      <LoginViewContext.Provider
        value={{ loginPageView, setLoginPageView }}
      >
        <ContainerViewContext.Provider
          value={{ containerView, setContainerView }}
        >
          <OpenChatWindowContext.Provider
            value={{ openChatWindow, setOpenChatWindow }}
          >
            {children}
          </OpenChatWindowContext.Provider>
        </ContainerViewContext.Provider>
      </LoginViewContext.Provider>
    </PageContext.Provider>
  );
};

export default ContextProviders;
