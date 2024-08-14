import { useContext } from "react";
import { LightModeContext } from "../../../contexts/LightModeContext";

const MainButton = ({ className, onClick, text }) => {
  const { isLightMode } = useContext(LightModeContext);
  return (
    <div
      className={`main-button ${className} ${isLightMode ? "light-mode-1" : "dark-mode-1"}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default MainButton;
