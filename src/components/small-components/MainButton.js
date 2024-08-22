import { useContext } from "react";
import { LightModeContext } from "../../contexts/LightModeContext";

const MainButton = ({ className, type, onClick, text }) => {
  const { isLightMode } = useContext(LightModeContext);
  return (
    <button
      className={`main-button ${className} ${isLightMode ? "light-mode-1" : "dark-mode-1"}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
