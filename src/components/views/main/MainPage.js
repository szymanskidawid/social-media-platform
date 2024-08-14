import { useContext } from "react";
import Feed from "./Feed";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSideWindow from "./right-side-container/RightSideWindow";
import { MainViewContext } from "../../../contexts/MainViewContext";
import Profile from "./Profile";
import Friends from "./Friends";
import EditProfile from "./EditProfile";

const MainPage = () => {
  const { mainView } = useContext(MainViewContext);
  const selectedMainView = (selection) => {
    switch (selection) {
      case "mainFeed":
        return <Feed />;
      case "profile":
        return <Profile />;
      case "editProfile":
        return <EditProfile />;
      case "friends":
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
