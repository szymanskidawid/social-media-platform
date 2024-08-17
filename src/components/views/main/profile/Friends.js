import { useContext } from "react";
import UserInfo from "../../../small-components/UserInfo";
import { LightModeContext } from "../../../../contexts/LightModeContext";

const Friends = () => {
  const { isLightMode } = useContext(LightModeContext);
  return (
    <div
      className={`friends-container ${isLightMode ? "light-mode-1" : "dark-mode-1"}`}
    >
      <div
        className={`friends-top ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
      >
        <div className="friends-text">All Friends:</div>
        <div className="friends-text">5</div>
      </div>
      <div className="friends-all">
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
        <UserInfo type={"vertical"} />
      </div>
      <div className="friends-find-new">
        <div
          className={`friends-find-new-text ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
        >
          Find new friends!
        </div>
        <div className="friends-find-all">
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
          <UserInfo type={"vertical"} />
        </div>
      </div>
    </div>
  );
};

export default Friends;
