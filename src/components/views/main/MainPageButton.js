const MainPageButton = ({ className, onClick, text }) => {
  return (
    <div className={`main-page-button ${className}`} onClick={onClick}>
      {text}
    </div>
  );
};

export default MainPageButton;
