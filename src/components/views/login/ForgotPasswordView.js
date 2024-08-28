import { useState } from "react";
import InputField from "../../small-components/InputField";
import MainButton from "../../small-components/MainButton";
import { useNavigate } from "react-router-dom";

// TODO: Prevent default submission

const ForgotPasswordView = () => {
  const [emailValidation, setEmailValidation] = useState(false);

  const navigate = useNavigate();

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
          <MainButton onClick={() => setEmailValidation(true)} text={"Send"} />
        </form>
      );
    } else {
      return (
        <>
          <p>If email exists, you will receive a link.</p>
          <MainButton
            onClick={() => {
              navigate("/login");
              setEmailValidation(false);
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
