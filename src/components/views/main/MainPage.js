import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSideWindow from "./right-side-container/RightSideWindow";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="main-page-container">
        <Sidebar />
        <Outlet />
        <RightSideWindow />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
