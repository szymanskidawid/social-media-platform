import { useContext } from "react";
import Logo from "../../small-components/Logo";
import { LightModeContext } from "../../../contexts/LightModeContext";
import { Outlet } from "react-router-dom";

const LoginPage = () => {
  const { isLightMode } = useContext(LightModeContext);

  return (
    <div className="login-page-container">
      <div className="login-page-content-container">
        <div className="login-page-logo">
          <Logo />
        </div>
        <div
          className={`login-page-right-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
