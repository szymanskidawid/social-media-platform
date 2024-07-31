import { useContext, useState } from "react";
import { LoginViewContext } from "../../../contexts/LoginViewContext";
import InputField from "../../small-components/InputField";
import LoginPageButton from "./LoginPageButton";

// TODO: Prevent default submission

const RegisterView = () => {
  const { setLoginPageView } = useContext(LoginViewContext);

  const [registerSuccessful, setRegisterSuccessful] = useState(false);

  const selectedRegisterView = (selection) => {
    if (!selection) {
      return (
        <form method="POST">
          <div className="login-page-input-container">
            <label className="login-page-label" htmlFor="login">
              Email
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
          <div className="login-page-input-container">
            <label className="login-page-label" htmlFor="repeatPassword">
              Repeat Password
            </label>
            <InputField
              style={{ height: "30px", width: "200px" }}
              placeholder={"Enter password"}
              name={"repeatPassword"}
              required
            />
          </div>
          <LoginPageButton
            text={"Register"}
            onClick={() => setRegisterSuccessful(!selection)}
          />
        </form>
      );
    } else {
      return (
        <div className="">
          <p>Go to your email to validate account..</p>
          <LoginPageButton
            text={"Back"}
            onClick={() => {
              setLoginPageView("loginView");
              setRegisterSuccessful(!selection);
            }}
          />
        </div>
      );
    }
  };

  return <>{selectedRegisterView(registerSuccessful)}</>;
};

export default RegisterView;
