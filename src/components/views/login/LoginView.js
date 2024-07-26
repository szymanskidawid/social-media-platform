import { useContext } from "react";
import Logo from "../../small/Logo";
import { ViewContext } from "../../../contexts/ViewContext";

const LoginView = () => {
  const { setView } = useContext(ViewContext);

  return (
    <div className="login-view-container">
      <div className="login-view-content-container">
        <div className="login-view-logo">
          <Logo />
        </div>
        <div className="login-view-form-container">
          <form method="POST">
            <div className="login-view-input-container">
                <label htmlFor="login">Login</label>
                <input type="text" placeholder="Enter username" name="login" required></input>
            </div>
            <div className="login-view-input-container">
              <label htmlFor="password">Password</label>
              <input type="text" placeholder="Enter password" name="password" required></input>
            </div>
            <button type="submit" onClick={() => setView("main")}>Login</button>
            <p>Forgot password?</p>
            <p>Don't have an account? Time to register!</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginView
