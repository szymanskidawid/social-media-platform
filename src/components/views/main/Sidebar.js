import { useContext } from "react";
import UserInfo from "../../small-components/UserInfo";
import MainButton from "../../small-components/MainButton";
import { MainViewContext } from "../../../contexts/MainViewContext";
import { LightModeContext } from "../../../contexts/LightModeContext";
import { UserContext } from "../../../contexts/UserContext";

const Sidebar = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { setMainView } = useContext(MainViewContext);
  const { user } = useContext(UserContext);
  return (
    <nav
      className={`sidebar-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
    >
      <UserInfo
        type={"horizontal"}
        src={user.profile_photo}
        onClick={() => setMainView("profile")}
        name={user.full_name}
      />
      <MainButton
        text={"Edit Profile"}
        onClick={() => setMainView("editProfile")}
      />
      <MainButton text={"Photos"} onClick={() => setMainView("photos")} />
      <MainButton text={"Friends"} onClick={() => setMainView("friends")} />
    </nav>
  );
};

export default Sidebar;
