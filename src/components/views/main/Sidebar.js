import { useContext } from "react";
import UserInfo from "../../small-components/UserInfo";
import MainButton from "../../small-components/MainButton";
import { LightModeContext } from "../../../contexts/LightModeContext";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext";

const Sidebar = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { user, loading } = useContext(DataContext);

  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;

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
