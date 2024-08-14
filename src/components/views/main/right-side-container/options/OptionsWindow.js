import { useContext } from "react";
import MainButton from "../../MainButton";
import { PageContext } from "../../../../../contexts/PageContext";
import { LightModeContext } from "../../../../../contexts/LightModeContext";

const OptionsWindow = () => {
  const { isLightMode, setIsLightMode } = useContext(LightModeContext);
  const { setPage } = useContext(PageContext);
  return (
    <div className="options-window-container">
      <MainButton
        text={isLightMode ? "Dark Mode" : "Light Mode"}
        onClick={() => setIsLightMode(!isLightMode)}
      />
      <MainButton text={"Log Out"} onClick={() => setPage("login")} />
    </div>
  );
};

export default OptionsWindow;
