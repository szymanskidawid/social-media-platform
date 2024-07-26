import Feed from "../main/Feed";
import Header from "../main/Header";
import Sidebar from "../main/Sidebar";
import RightSideWindow from "./right-side-container/RightSideWindow";

const MainView = () => {
  return (
    <>
      <Header />
      <div className="main-view-container">
        <Sidebar />
        <Feed />
        <RightSideWindow />
      </div>
    </> 
  )
}

export default MainView
