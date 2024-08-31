import { useContext } from "react";
import { LightModeContext } from "../../contexts/LightModeContext";

const MainButton = ({ style, className, type, onClick, text }) => {
  const { isLightMode } = useContext(LightModeContext);
  return (
    <button
      style={style}
      className={`main-button ${className} ${isLightMode ? "main-button-light-mode" : "main-button-dark-mode"}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
