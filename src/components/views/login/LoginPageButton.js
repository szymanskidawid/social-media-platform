const LoginPageButton = ({ text, onClick }) => {
  return (
    <button className="login-page-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default LoginPageButton;
