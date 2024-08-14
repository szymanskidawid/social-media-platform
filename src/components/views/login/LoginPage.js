import { useContext } from "react";
import Logo from "../../small-components/Logo";
import { PageContext } from "../../../contexts/PageContext";
import { LoginViewContext } from "../../../contexts/LoginViewContext";
import InputField from "../../small-components/InputField";
import RegisterView from "./RegisterView";
import ForgotPasswordView from "./ForgotPasswordView";
import MainButton from "../main/MainButton";
import { LightModeContext } from "../../../contexts/LightModeContext";

// TODO: Prevent default submission

const LoginPage = () => {
  const { isLightMode, setIsLightMode } = useContext(LightModeContext);
  const { setPage } = useContext(PageContext);
  const { loginPageView, setLoginPageView } = useContext(LoginViewContext);

  const selectedLoginPageView = (selection) => {
    if (selection === "loginView") {
      return (
        <>
          <form className="login-page-form" method="POST">
            <InputField
              style={{ height: "30px", width: "200px" }}
              placeholder={"Enter email"}
              name={"login"}
              required
            />
            <InputField
              style={{ height: "30px", width: "200px" }}
              placeholder={"Enter password"}
              name={"password"}
              required
            />
            <MainButton onClick={() => setPage("main")} text={"Log In"} />
          </form>
          <div
            className="login-page-underline-buttons"
            onClick={() => setLoginPageView("forgotPasswordView")}
          >
            Forgot password?
          </div>
          <div
            className="login-page-underline-buttons"
            onClick={() => setLoginPageView("registerView")}
          >
            Don't have an account? Time to register!
          </div>
        </>
      );
    } else if (selection === "forgotPasswordView") {
      return <ForgotPasswordView />;
    } else if (selection === "registerView") {
      return <RegisterView />;
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-page-content-container">
        <div className="login-page-logo">
          <Logo />
        </div>
        <div
          className={`login-page-right-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
        >
          {selectedLoginPageView(loginPageView)}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
