import { useContext, useState } from "react";
import { LoginViewContext } from "../../../contexts/LoginViewContext";
import InputField from "../../small-components/InputField";
import MainButton from "../main/MainButton";

// TODO: Prevent default submission

const RegisterView = () => {
  const { setLoginPageView } = useContext(LoginViewContext);

  const [registerSuccessful, setRegisterSuccessful] = useState(false);

  const selectedRegisterView = (selection) => {
    if (!selection) {
      return (
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
          <InputField
            style={{ height: "30px", width: "200px" }}
            placeholder={"Enter password"}
            name={"repeatPassword"}
            required
          />
          <MainButton
            onClick={() => setRegisterSuccessful(!selection)}
            text={"Register"}
          />
        </form>
      );
    } else {
      return (
        <>
          <p>Go to your email to validate account..</p>
          <MainButton
            onClick={() => {
              setLoginPageView("loginView");
              setRegisterSuccessful(!selection);
            }}
            text={"Back"}
          />
        </>
      );
    }
  };

  return <>{selectedRegisterView(registerSuccessful)}</>;
};

export default RegisterView;
