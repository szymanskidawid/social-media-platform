import { useContext, useState } from "react";
import { LoginViewContext } from "../../../contexts/LoginViewContext";
import InputField from "../../small-components/InputField";

const RegisterView = () => {
  const { setLoginPageView } = useContext(LoginViewContext);

  const [registerSuccessful, setRegisterSuccessful] = useState(false);

  const selectedRegisterView = (selection) => {
    if (selection) {
      return (
        <div className="">
          <p>Go to your email to validate account..</p>
          <button
            type="submit"
            onClick={() => {
              setLoginPageView("loginView");
              setRegisterSuccessful(!selection);
            }}
          >
            Back
          </button>
        </div>
      );
    } else {
      return (
        <form method="POST">
          <div className="login-page-input-container">
            <label htmlFor="login">Email</label>
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
          <div className="login-page-input-container">
            <label htmlFor="repeatPassword">Repeat Password</label>
            <InputField
              style={{ height: "30px", width: "200px" }}
              placeholder={"Enter password"}
              name={"repeatPassword"}
              required
            />
          </div>
          <button
            type="submit"
            onClick={() => setRegisterSuccessful(!selection)}
          >
            Register
          </button>
        </form>
      );
    }
  };

  return <>{selectedRegisterView(registerSuccessful)}</>;
};

export default RegisterView;
