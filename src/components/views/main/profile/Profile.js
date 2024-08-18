import { useContext } from "react";
import UserInfo from "../../../small-components/UserInfo";
import Feed from "../posts/Feed";
import { MainViewContext } from "../../../../contexts/MainViewContext";
import Photo from "../../../small-components/Photo";
import { LightModeContext } from "../../../../contexts/LightModeContext";

const Profile = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { setMainView } = useContext(MainViewContext);
  return (
    <>
      <div
        className={`profile-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
      >
        <div className="profile-top-container">
          <div className="profile-background-pic-container">
            <Photo type={"view"} src={"https://picsum.photos/id/236/400/400"} />
          </div>

          <div className="profile-pic-container">
            <Photo
              type={"view"}
              style={{ borderRadius: "100%" }}
              src={"https://picsum.photos/id/237/400/400"}
            />
          </div>
        </div>
        <p className="profile-name">Great Dog</p>
        <div
          className={`profile-info-container ${isLightMode ? "light-mode-3" : "dark-mode-3"}`}
        >
          <div className="profile-info">
            <div className="profile-info-icon">
              <i className="fa-solid fa-city fa-xl"></i>
            </div>
            <div className="profile-info-text">Town</div>
          </div>
          <div className="profile-info">
            <div className="profile-info-icon">
              <i className="fa-solid fa-school fa-xl"></i>
            </div>
            <div className="profile-info-text">School</div>
          </div>
          <div className="profile-info">
            <div className="profile-info-icon">
              <i className="fa-solid fa-briefcase fa-xl"></i>
            </div>
            <div className="profile-info-text">Work</div>
          </div>
        </div>
        <div
          className={`profile-friends-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
        >
          <div className="profile-friends-top-section">
            <div className="profile-friends-text">Friends: </div>
            <div className="profile-friends-text">5</div>
          </div>
          <div className="profile-friends">
            <UserInfo type={"vertical"} />
            <UserInfo type={"vertical"} />
            <UserInfo type={"vertical"} />
            <UserInfo type={"vertical"} />
            <UserInfo type={"vertical"} />
          </div>
          <div
            className="profile-friends-view-more-button"
            onClick={() => setMainView("friends")}
          >
            View more friends
          </div>
        </div>
        <Feed />
      </div>
    </>
  );
};

export default Profile;
