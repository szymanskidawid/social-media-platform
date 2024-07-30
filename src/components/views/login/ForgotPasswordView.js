import { useContext, useState } from "react";
import { LoginViewContext } from "../../../contexts/LoginViewContext";
import InputField from "../../small-components/InputField";

const ForgotPasswordView = () => {
  const { setLoginPageView } = useContext(LoginViewContext);

  const [emailValidation, setEmailValidation] = useState(false);

  const selectedForgotPasswordView = (selection) => {
    4;
    if (selection) {
      return (
        <div className="">
          <p>
            If email exists, you will receive confirmation and a link to reset
            your password.
          </p>
          <button
            type="submit"
            onClick={() => {
              setLoginPageView("loginView");
              setEmailValidation(!selection);
            }}
          >
            Back
          </button>
        </div>
      );
    } else {
      return (
        <>
          <div className="login-page-input-container">
            <label htmlFor="email">Email</label>
            <InputField
              style={{ height: "30px", width: "200px" }}
              placeholder={"Enter email"}
              name={"email"}
              required
            />
          </div>
          <button type="submit" onClick={() => setEmailValidation(!selection)}>
            Send
          </button>
        </>
      );
    }
  };

  return <>{selectedForgotPasswordView(emailValidation)}</>;
};

export default ForgotPasswordView;
