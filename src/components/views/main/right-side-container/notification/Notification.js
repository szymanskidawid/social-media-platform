import { useContext } from "react";
import UserInfo from "../../../../small-components/UserInfo";
import MainButton from "../../../../small-components/MainButton";
import XButton from "../../../../small-components/XButton";
import { LightModeContext } from "../../../../../contexts/LightModeContext";
import { DataContext } from "../../../../../contexts/DataContext";

const Notification = ({ id, personId, type }) => {
  const { isLightMode } = useContext(LightModeContext);
  const { people, loading, notifications, setNotifications } =
    useContext(DataContext);

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

  const handleRemoveNotification = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/notifications/remove/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setNotifications(
          notifications.filter((notification) => notification._id !== id)
        );
        console.log("Notification removed");
      } else {
        console.error("Cannot remove notification:", data.message);
      }
    } catch (error) {
      console.log("There was an error: ", error);
    }
  };

  if (loading) return <p>Loading...</p>;

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
        {type !== "friend_request" ? (
          <div>
            <XButton onClick={handleRemoveNotification} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="notification-text">{notificationText(type)}</div>
      {type === "friend_request" ? (
        <div className="notification-actions">
          <MainButton text={"Accept"} onClick={handleRemoveNotification} />
          <MainButton
            className={"red"}
            text={"Decline"}
            onClick={handleRemoveNotification}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Notification;
