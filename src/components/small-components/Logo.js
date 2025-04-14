const Logo = ({ onClick }) => {
  return (
    <img
      className="logo-img"
      src="/assets/logo.jpg"
      alt="logo"
      onClick={onClick}
    />
  );
};

export default Logo;
