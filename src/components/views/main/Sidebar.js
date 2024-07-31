import UserInfo from "../../small-components/UserInfo";
import MainPageButton from "./MainPageButton";

const Sidebar = () => {
  return (
    <nav className="main-page-sidebar-container">
      <UserInfo />
      <MainPageButton text={"Friends"} />
      <MainPageButton text={"Temp"} />
    </nav>
  );
};

export default Sidebar;
