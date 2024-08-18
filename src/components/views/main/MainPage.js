import { useContext } from "react";
import Feed from "./posts/Feed";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSideWindow from "./right-side-container/RightSideWindow";
import { MainViewContext } from "../../../contexts/MainViewContext";
import Profile from "./profile/Profile";
import Friends from "./profile/Friends";
import EditProfile from "./profile/EditProfile";
import PhotoAlbum from "./profile/PhotoAlbum";

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
      case "photos":
        return <PhotoAlbum />;
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
