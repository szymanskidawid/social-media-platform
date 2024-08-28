import { useContext } from "react";
import UserInfo from "../../../../small-components/UserInfo";
import MainButton from "../../../../small-components/MainButton";
import { LightModeContext } from "../../../../../contexts/LightModeContext";
import { DataContext } from "../../../../../contexts/DataContext";

const Notification = ({ personId, type }) => {
  const { isLightMode } = useContext(LightModeContext);
  const { people, loading } = useContext(DataContext);

  const selectedPerson = people.find((person) => person.user_id === personId);

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
      className={`notification-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
    >
      <UserInfo
        personId={selectedPerson.user_id}
        type={"horizontal"}
        src={selectedPerson.profile_photo}
        name={selectedPerson.full_name}
      />
      <div className="notification-text">{notificationText(type)}</div>
      {notificationAction(type)}
    </div>
  );
};

export default Notification;
