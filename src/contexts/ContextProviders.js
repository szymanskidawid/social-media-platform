import { LightModeContext } from "./LightModeContext";
import { ContainerViewContext } from "./ContainerViewContext";
import { LoginStateContext } from "./LoginStateContext";
import { SelectedPersonIdContext } from "./SelectedPersonIdContext";
import { DataProvider } from "./DataContext";

const ContextProviders = ({
  children,
  isLightMode,
  isLoggedIn,
  setIsLoggedIn,
  setIsLightMode,
  containerView,
  setContainerView,
  selectedPersonId,
  setSelectedPersonId,
}) => {
  return (
    <LightModeContext.Provider value={{ isLightMode, setIsLightMode }}>
      <LoginStateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <ContainerViewContext.Provider
          value={{ containerView, setContainerView }}
        >
          <SelectedPersonIdContext.Provider
            value={{ selectedPersonId, setSelectedPersonId }}
          >
            <DataProvider>{children}</DataProvider>
          </SelectedPersonIdContext.Provider>
        </ContainerViewContext.Provider>
      </LoginStateContext.Provider>
    </LightModeContext.Provider>
  );
};

export default ContextProviders;
