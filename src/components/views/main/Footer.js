import { useContext } from "react";
import { LightModeContext } from "../../../contexts/LightModeContext";

const Footer = () => {
  const { isLightMode } = useContext(LightModeContext);
  return (
    <div
      className={`footer-container ${isLightMode ? "light-mode-3" : "dark-mode-3"}`}
    >
      © 2024 Dawid Szymański. All rights reserved.
    </div>
  );
};

export default Footer;
