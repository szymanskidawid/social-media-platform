const MainPageButton = ({ onClick, text }) => {
  return (
    <div className="main-page-button" onClick={onClick}>
      {text}
    </div>
  );
};

export default MainPageButton;
