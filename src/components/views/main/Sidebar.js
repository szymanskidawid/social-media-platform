import { useContext } from "react";
import UserInfo from "../../small-components/UserInfo";
import MainButton from "../../small-components/MainButton";
import { LightModeContext } from "../../../contexts/LightModeContext";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <nav
      className={`sidebar-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
    >
      <UserInfo
        personId={user.user_id}
        type={"horizontal"}
        src={user.profile_photo}
        name={user.full_name}
      />
      <MainButton
        text={"Edit Profile"}
        onClick={() => navigate(`/home/profile/${user.user_id}/edit`)}
      />
      <MainButton
        text={"Photos"}
        onClick={() => navigate(`/home/profile/${user.user_id}/photos`)}
      />
      <MainButton
        text={"Friends"}
        onClick={() => navigate(`/home/profile/${user.user_id}/friends`)}
      />
    </nav>
  );
};

export default Sidebar;
