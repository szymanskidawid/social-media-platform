import { useContext } from "react";
import Notification from "./Notification";
import { DataContext } from "../../../../../contexts/DataContext";

const NotificationsWindow = () => {
  const { user, notifications, loading } = useContext(DataContext);

  const selectedNotifications = notifications.filter(
    (notification) => notification.notified_user_id === user.user_id
  );

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {selectedNotifications && selectedNotifications.length > 0 ? (
        selectedNotifications.map((notificationsGroup) =>
          notificationsGroup.notifications.map((notification) => (
            <Notification
              key={notification.id}
              personId={notification.from}
              type={notification.type}
            />
          ))
        )
      ) : (
        <p>No new notifications</p>
      )}
    </>
  );
};

export default NotificationsWindow;
