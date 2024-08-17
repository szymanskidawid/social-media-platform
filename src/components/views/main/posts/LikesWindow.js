import { useContext } from "react";
import UserInfo from "../../../small-components/UserInfo";
import { LightModeContext } from "../../../../contexts/LightModeContext";

const LikesWindow = () => {
  const { isLightMode } = useContext(LightModeContext);
  return (
    <div
      className={`likes-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
    >
      <div className="likes-container-top">Likes 5</div>
      <div className="likes-container-people">
        <UserInfo type={"horizontal"} />
        <UserInfo type={"horizontal"} />
        <UserInfo type={"horizontal"} />
        <UserInfo type={"horizontal"} />
        <UserInfo type={"horizontal"} />
        <UserInfo type={"horizontal"} />
        <UserInfo type={"horizontal"} />
      </div>
    </div>
  );
};

export default LikesWindow;
