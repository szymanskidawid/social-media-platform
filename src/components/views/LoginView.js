import Logo from "../small/Logo"

const LoginView = () => {
  return (
    <div className="login-view-container">
      <Logo />
      <form method="POST">
        <div>
            <label for="login">Login</label>
            <input type="text" placeholder="Enter username" name="login" required></input>
            <label for="password">Password</label>
            <input type="text" placeholder="Enter password" name="password" required></input>
            <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginView
