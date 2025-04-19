import { useContext } from "react";
import Notification from "./Notification";
import { DataContext } from "../../../../../contexts/DataContext";

const NotificationsWindow = () => {
  const { user, notifications, loading } = useContext(DataContext);

  const selectedNotifications = notifications.filter(
    (notification) => notification.notified_user_id === user._id
  );

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {selectedNotifications && selectedNotifications.length > 0 ? (
        selectedNotifications.map((notification) => (
          <Notification
            key={notification._id}
            personId={notification.user_id}
            type={notification.type}
          />
        ))
      ) : (
        <p>No new notifications</p>
      )}
    </>
  );
};

export default NotificationsWindow;
