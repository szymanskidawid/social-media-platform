const LoginPageButton = ({ style, onClick, text }) => {
  return (
    <div className="login-page-button" style={style} onClick={onClick}>
      {text}
    </div>
  );
};

export default LoginPageButton;
