import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSideWindow from "./right-side-container/RightSideWindow";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="main-page-container">
        <Sidebar />
        <Feed />
        <RightSideWindow />
      </div>
    </>
  );
};

export default MainPage;
