import { useContext } from "react";
import UserInfo from "../../small-components/UserInfo";
import MainButton from "../../small-components/MainButton";
import { MainViewContext } from "../../../contexts/MainViewContext";
import { LightModeContext } from "../../../contexts/LightModeContext";

const Sidebar = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { setMainView } = useContext(MainViewContext);
  return (
    <nav
      className={`sidebar-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
    >
      <UserInfo type={"horizontal"} onClick={() => setMainView("profile")} />
      <MainButton
        text={"Edit Profile"}
        onClick={() => setMainView("editProfile")}
      />
      <MainButton text={"Friends"} onClick={() => setMainView("friends")} />
    </nav>
  );
};

export default Sidebar;
