import { useContext } from "react";
import UserInfo from "../../../../small-components/UserInfo";
import MainButton from "../../../../small-components/MainButton";
import XButton from "../../../../small-components/XButton";
import { LightModeContext } from "../../../../../contexts/LightModeContext";
import { DataContext } from "../../../../../contexts/DataContext";

const Notification = ({ personId, type }) => {
  const { isLightMode } = useContext(LightModeContext);
  const { people, loading } = useContext(DataContext);

  const selectedPerson = people.find((person) => person._id === personId);

  const notificationText = (selection) => {
    switch (selection) {
      case "friend_request":
        return "Sent you a friend request!";
      case "like":
        return "Liked your post!";
      case "comment":
        return "Commented your post!";
    }
  };

  const handleRemoveNotification = () => {};

  if (loading) return <p>Loading...</p>;

  const notificationAction = (selection) => {
    if (selection === "friend_request") {
      return (
        <div className="notification-actions">
          <MainButton text={"Accept"} />
          <MainButton className={"red"} text={"Decline"} />
        </div>
      );
    }
  };

  return (
    <div
      className={`notification-container ${isLightMode ? "light-mode-2" : "dark-mode-3"}`}
    >
      <div className="notification-top">
        <UserInfo
          personId={selectedPerson._id}
          type={"horizontal"}
          src={selectedPerson.profile_photo}
          name={selectedPerson.full_name}
        />
        <div>
          <XButton onClick={handleRemoveNotification} />
        </div>
      </div>
      <div className="notification-text">{notificationText(type)}</div>
      {notificationAction(type)}
    </div>
  );
};

export default Notification;
