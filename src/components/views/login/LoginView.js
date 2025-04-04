import { useState, useContext } from "react";
import InputField from "../../small-components/InputField";
import MainButton from "../../small-components/MainButton";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoginStateContext } from "../../../contexts/LoginStateContext";
import { DataContext } from "../../../contexts/DataContext";
import { IdTrackingContext } from "../../../contexts/IdTrackingContext";

const LoginView = () => {
  const [incorrectLogin, setIncorrectLogin] = useState(false);
  const { setIsLoggedIn } = useContext(LoginStateContext);
  const { setUser, people } = useContext(DataContext);
  const { setSelectedProfileId } = useContext(IdTrackingContext);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    setIncorrectLogin(false);

    try {
      const response = await fetch(
        //"https://social-media-platform-backend-l5h4.onrender.com/logins",
        `http://localhost:4000/logins`,
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
        if (data.first_login === true) {
          setUser(data);
        } else {
          setUser(people.find((person) => person.login_id === data._id));
        }
        setSelectedProfileId(data._id);
        setIsLoggedIn(true);
        if (data.first_login == true) {
          navigate("/welcome");
        } else {
          navigate("/home");
        }
      } else {
        setIncorrectLogin(true);
        console.log("Login failed", data.error);
      }
    } catch (error) {
      console.log("There was an error: ", error);
    }
  };

  return (
    <>
      <form className="login-page-form" onSubmit={handleLogin} method="POST">
        <InputField name="email" placeholder="Email" required />
        <InputField name="password" placeholder="Password" required />
        <MainButton type="submit" text={"Log In"} />
      </form>
      {incorrectLogin ? (
        <Alert severity="error">Incorrect Login or Password!</Alert>
      ) : (
        ""
      )}
      <div
        className="login-page-underline-buttons"
        onClick={() => navigate("/login/forgotpassword")}
      >
        Forgot password?
      </div>
      <div
        className="login-page-underline-buttons"
        onClick={() => navigate("/login/register")}
      >
        Don't have an account? Time to register!
      </div>
    </>
  );
};

export default LoginView;
