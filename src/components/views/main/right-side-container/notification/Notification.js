import UserInfo from "../../../../small-components/UserInfo";
import MainPageButton from "../../MainPageButton";

const Notification = () => {
  return (
    <div className="notification-container">
      <UserInfo type={"horizontal"} />
      <div className="notification-text">Has sent you a friend request.</div>
      <div className="notification-actions">
        <MainPageButton text={"Accept"} />
        <MainPageButton className={"red"} text={"Decline"} />
      </div>
    </div>
  );
};

export default Notification;
