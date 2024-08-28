import { useContext } from "react";
import InputField from "../../small-components/InputField";
import MainButton from "../../small-components/MainButton";
import { useNavigate } from "react-router-dom";
import { LoginStateContext } from "../../../contexts/LoginStateContext";
import { DataContext } from "../../../contexts/DataContext";

const LoginView = () => {
  const { setIsLoggedIn } = useContext(LoginStateContext);
  const { setUser, loginCheck } = useContext(DataContext);
  //const { setSelectedProfileId } = useContext(IdTrackingContext);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("login");
    const password = formData.get("password");

    try {
      const loggedUser = await loginCheck(email, password);

      if (loggedUser !== null) {
        setUser(loggedUser);
        //setSelectedProfileId(loggedUser.user_id);

        setIsLoggedIn(true);
        navigate("/home");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log("There was an error: ", error);
    }
  };

  return (
    <>
      <form className="login-page-form" onSubmit={handleLogin} method="POST">
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
        <MainButton type="submit" text={"Log In"} />
      </form>
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
