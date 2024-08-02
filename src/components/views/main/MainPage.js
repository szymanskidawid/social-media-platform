import { useContext } from "react";
import Feed from "./Feed";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSideWindow from "./right-side-container/RightSideWindow";
import { MainViewContext } from "../../../contexts/MainViewContext";
import Profile from "./Profile";
import Friends from "./Friends";

const MainPage = () => {
  const { mainView } = useContext(MainViewContext);
  const selectedMainView = (selection) => {
    if (selection === "mainFeed") {
      return <Feed />;
    } else if (selection === "profile") {
      return <Profile />;
    } else if (selection === "friends") {
      return <Friends />;
    }
  };
  return (
    <>
      <Header />
      <div className="main-page-container">
        <Sidebar />
        {selectedMainView(mainView)}
        <RightSideWindow />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
