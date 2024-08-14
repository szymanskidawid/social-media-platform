import { useContext, useState } from "react";
import { LoginViewContext } from "../../../contexts/LoginViewContext";
import InputField from "../../small-components/InputField";
import MainButton from "../main/MainButton";

// TODO: Prevent default submission

const ForgotPasswordView = () => {
  const { setLoginPageView } = useContext(LoginViewContext);

  const [emailValidation, setEmailValidation] = useState(false);

  const selectedForgotPasswordView = (selection) => {
    if (!selection) {
      return (
        <form className="login-page-form">
          <InputField
            style={{ height: "30px", width: "200px" }}
            placeholder={"Enter email"}
            name={"email"}
            required
          />
          <MainButton
            onClick={() => setEmailValidation(!selection)}
            text={"Send"}
          />
        </form>
      );
    } else {
      return (
        <>
          <p>If email exists, you will receive a link.</p>
          <MainButton
            onClick={() => {
              setLoginPageView("loginView");
              setEmailValidation(!selection);
            }}
            text={"Back"}
          />
        </>
      );
    }
  };

  return <>{selectedForgotPasswordView(emailValidation)}</>;
};

export default ForgotPasswordView;
