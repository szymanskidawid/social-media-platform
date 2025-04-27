import { useContext } from "react";
import Notification from "./Notification";
import { DataContext } from "../../../../../contexts/DataContext";
import { formatDistanceToNow } from "date-fns";

const NotificationsWindow = () => {
  const { user, notifications, loading } = useContext(DataContext);

  const selectedNotifications = notifications.filter(
    (notification) => notification.notified_user_id === user._id
  );

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {selectedNotifications && selectedNotifications.length > 0 ? (
        selectedNotifications
          .sort((a, b) => new Date(b.time_posted) - new Date(a.time_posted))
          .map((notification) => (
            <Notification
              key={notification._id}
              id={notification._id}
              personId={notification.user_id}
              type={notification.type}
              timeSent={formatDistanceToNow(new Date(notification.time_sent))}
            />
          ))
      ) : (
        <p>No new notifications</p>
      )}
    </>
  );
};

export default NotificationsWindow;
