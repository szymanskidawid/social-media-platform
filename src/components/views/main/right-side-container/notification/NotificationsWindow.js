import { useContext } from "react";
import Notification from "./Notification";
import { UserContext } from "../../../../../contexts/UserContext";
import { NotificationsContext } from "../../../../../contexts/NotificationsContext";

const NotificationsWindow = () => {
  const { user } = useContext(UserContext);
  const { notifications } = useContext(NotificationsContext);

  const selectedNotifications = notifications.filter(
    (notification) => notification.notified_user_id === user.user_id
  );

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
