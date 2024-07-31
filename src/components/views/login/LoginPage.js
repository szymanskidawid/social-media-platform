import { useContext } from "react";
import Logo from "../../small-components/Logo";
import { PageContext } from "../../../contexts/PageContext";
import { LoginViewContext } from "../../../contexts/LoginViewContext";
import InputField from "../../small-components/InputField";
import RegisterView from "./RegisterView";
import ForgotPasswordView from "./ForgotPasswordView";
import LoginPageButton from "./LoginPageButton";

// TODO: Prevent default submission

const LoginPage = () => {
  const { setPage } = useContext(PageContext);
  const { loginPageView, setLoginPageView } = useContext(LoginViewContext);

  const selectedLoginPageView = (selection) => {
    if (selection === "loginView") {
      return (
        <form method="POST">
          <div className="login-page-input-container">
            <label className="login-page-label" htmlFor="login">
              Login
            </label>
            <InputField
              style={{ height: "30px", width: "200px" }}
              placeholder={"Enter email"}
              name={"login"}
              required
            />
          </div>
          <div className="login-page-input-container">
            <label className="login-page-label" htmlFor="password">
              Password
            </label>
            <InputField
              style={{ height: "30px", width: "200px" }}
              placeholder={"Enter password"}
              name={"password"}
              required
            />
          </div>
          <LoginPageButton text={"Log In"} onClick={() => setPage("main")} />
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
        </form>
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
        <div>
          <Logo />
        </div>
        <div className="login-page-form-container">
          {selectedLoginPageView(loginPageView)}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
