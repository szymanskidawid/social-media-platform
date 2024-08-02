import { useContext } from "react";
import UserInfo from "../../small-components/UserInfo";
import MainPageButton from "./MainPageButton";
import { MainViewContext } from "../../../contexts/MainViewContext";

const Sidebar = () => {
  const { setMainView } = useContext(MainViewContext);
  return (
    <nav className="main-page-sidebar-container">
      <UserInfo type={"horizontal"} onClick={() => setMainView("profile")} />
      <MainPageButton text={"Friends"} onClick={() => setMainView("friends")} />
      <MainPageButton text={"Temp"} />
    </nav>
  );
};

export default Sidebar;
