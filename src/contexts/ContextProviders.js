import { LightModeProvider } from "./LightModeContext";
import { ContainerViewProvider } from "./ContainerViewContext";
import { LoginStateProvider } from "./LoginStateContext";
import { DataProvider } from "./DataContext";
import { IdTrackingProvider } from "./IdTrackingContext";

const ContextProviders = ({ children }) => {
  return (
    <LightModeProvider>
      <ContainerViewProvider>
        <LoginStateProvider>
          <DataProvider>
            <IdTrackingProvider>{children}</IdTrackingProvider>
          </DataProvider>
        </LoginStateProvider>
      </ContainerViewProvider>
    </LightModeProvider>
  );
};

export default ContextProviders;
