import { useContext } from "react";
import Logo from "../../small-components/Logo";
import { PageContext } from "../../../contexts/PageContext";
import { LoginViewContext } from "../../../contexts/LoginViewContext";
import InputField from "../../small-components/InputField";
import RegisterView from "./RegisterView";
import ForgotPasswordView from "./ForgotPasswordView";

// TODO: Prevent default submission

const LoginPage = () => {
  const { setPage } = useContext(PageContext);
  const { loginPageView, setLoginPageView } = useContext(LoginViewContext);

  const selectedLoginPageView = (selection) => {
    if (selection === "loginView") {
      return (
        <form method="POST">
          <div className="login-page-input-container">
            <label htmlFor="login">Login</label>
            <InputField
              style={{ height: "30px", width: "200px" }}
              placeholder={"Enter email"}
              name={"login"}
              required
            />
          </div>
          <div className="login-page-input-container">
            <label htmlFor="password">Password</label>
            <InputField
              style={{ height: "30px", width: "200px" }}
              placeholder={"Enter password"}
              name={"password"}
              required
            />
          </div>
          <button type="submit" onClick={() => setPage("main")}>
            Log In
          </button>
          <p onClick={() => setLoginPageView("forgotPasswordView")}>
            Forgot password?
          </p>
          <p onClick={() => setLoginPageView("registerView")}>
            Don't have an account? Time to register!
          </p>
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
        <div className="login-page-logo">
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
