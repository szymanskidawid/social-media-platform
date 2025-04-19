import { useContext } from "react";
import { LightModeContext } from "../../contexts/LightModeContext";

const MainButton = ({ style, className, type, onClick, disabled, text }) => {
  const { isLightMode } = useContext(LightModeContext);
  return (
    <button
      style={style}
      className={`main-button ${className} ${isLightMode ? "light-mode-1 button-light-mode" : "dark-mode-4 button-dark-mode"}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default MainButton;
