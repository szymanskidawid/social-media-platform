import { useContext } from "react";
import { LightModeContext } from "../../contexts/LightModeContext";

const XButton = ({ onClick }) => {
  const { isLightMode } = useContext(LightModeContext);
  return (
    <i
      className={`${isLightMode ? "icon-light-mode" : "icon-dark-mode"} fa-solid fa-xmark fa-xl`}
    ></i>
  );
};

export default XButton;
