import { useContext } from "react";
import UserInfo from "../../../../small-components/UserInfo";
import MainButton from "../../../../small-components/MainButton";
import { LightModeContext } from "../../../../../contexts/LightModeContext";

const Notification = () => {
  const { isLightMode } = useContext(LightModeContext);
  return (
    <div
      className={`notification-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
    >
      <UserInfo type={"horizontal"} />
      <div className="notification-text">Has sent you a friend request.</div>
      <div className="notification-actions">
        <MainButton text={"Accept"} />
        <MainButton className={"red"} text={"Decline"} />
      </div>
    </div>
  );
};

export default Notification;
