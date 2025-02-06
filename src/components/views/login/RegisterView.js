import { useState } from "react";
import InputField from "../../small-components/InputField";
import MainButton from "../../small-components/MainButton";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterView = () => {
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [registerSuccessful, setRegisterSuccessful] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const repeatPassword = formData.get("repeatPassword");

    if (password !== repeatPassword) {
      setPasswordMismatch(true);
      return;
    }

    setPasswordMismatch(false);

    try {
      const response = await fetch(
        //"https://social-media-platform-backend-l5h4.onrender.com/logins/create",
        `http://localhost:4000/logins/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setRegisterSuccessful(true);
      } else {
        console.log("Register process failed", data.error);
      }
    } catch (error) {
      console.log("There was an error: ", error);
    }
  };

  const selectedRegisterView = (selection) => {
    if (!selection) {
      return (
        <>
          <form
            className="login-page-form"
            onSubmit={handleRegister}
            method="POST"
          >
            <InputField
              style={{ height: "30px", width: "200px" }}
              placeholder={"Enter email"}
              name={"email"}
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
            <MainButton type="submit" text={"Register"} />
          </form>
          {passwordMismatch ? (
            <Alert severity="error">Passwords do not match!</Alert>
          ) : (
            ""
          )}
        </>
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
