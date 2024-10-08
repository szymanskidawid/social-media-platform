import { useContext } from "react";
import UserInfo from "../../small-components/UserInfo";
import MainButton from "../../small-components/MainButton";
import { LightModeContext } from "../../../contexts/LightModeContext";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext";
import { IdTrackingContext } from "../../../contexts/IdTrackingContext";

const Sidebar = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { user, loading } = useContext(DataContext);
  const { setSelectedProfileId } = useContext(IdTrackingContext);

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
        style={{ width: "100%" }}
        text={"Edit Profile"}
        onClick={() => {
          navigate(`/home/profile/${user.user_id}/edit`);
          setSelectedProfileId(user.user_id);
        }}
      />
      <MainButton
        style={{ width: "100%" }}
        text={"Photos"}
        onClick={() => {
          navigate(`/home/profile/${user.user_id}/photos`);
          setSelectedProfileId(user.user_id);
        }}
      />
      <MainButton
        style={{ width: "100%" }}
        text={"Friends"}
        onClick={() => {
          navigate(`/home/profile/${user.user_id}/friends`);
          setSelectedProfileId(user.user_id);
        }}
      />
    </nav>
  );
};

export default Sidebar;
