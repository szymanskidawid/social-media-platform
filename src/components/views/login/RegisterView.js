import { useState } from "react";
import InputField from "../../small-components/InputField";
import MainButton from "../../small-components/MainButton";
import { useNavigate } from "react-router-dom";

// TODO: Prevent default submission

const RegisterView = () => {
  const [registerSuccessful, setRegisterSuccessful] = useState(false);

  const navigate = useNavigate();

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
            onClick={() => setRegisterSuccessful(true)}
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
              navigate("/login");
              setRegisterSuccessful(false);
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
