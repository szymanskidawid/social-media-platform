import { useContext } from "react";
import UserInfo from "../../../small-components/UserInfo";
import Feed from "../posts/Feed";
import { MainViewContext } from "../../../../contexts/MainViewContext";
import Photo from "../../../small-components/Photo";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { UserContext } from "../../../../contexts/UserContext";
import { PeopleContext } from "../../../../contexts/PeopleContext";

const Profile = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { setMainView } = useContext(MainViewContext);
  const { user } = useContext(UserContext);
  const { people } = useContext(PeopleContext);
  return (
    <>
      <div
        className={`profile-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
      >
        <div className="profile-top-container">
          <div className="profile-background-pic-container">
            <Photo type={"view"} src={user.background_photo} />
          </div>

          <div className="profile-pic-container">
            <Photo
              type={"view"}
              style={{ borderRadius: "100%" }}
              src={user.profile_photo}
            />
          </div>
        </div>
        <p className="profile-name">{user.full_name}</p>
        <div
          className={`profile-info-container ${isLightMode ? "light-mode-3" : "dark-mode-3"}`}
        >
          <div className="profile-info">
            <div className="profile-info-icon">
              <i className="fa-solid fa-city fa-xl"></i>
            </div>
            <div className="profile-info-text">{user.town}</div>
          </div>
          <div className="profile-info">
            <div className="profile-info-icon">
              <i className="fa-solid fa-school fa-xl"></i>
            </div>
            <div className="profile-info-text">{user.school}</div>
          </div>
          <div className="profile-info">
            <div className="profile-info-icon">
              <i className="fa-solid fa-briefcase fa-xl"></i>
            </div>
            <div className="profile-info-text">{user.work}</div>
          </div>
        </div>
        <div
          className={`profile-photos-container ${isLightMode ? "light-mode-1" : "dark-mode-1"}`}
        >
          <div className="profile-photos-text">Photos</div>
          <div className="profile-photos">
            {user.photos && user.photos.length > 0 ? (
              user.photos.map((photo) => (
                <div className="profile-photo-container" key={photo.id}>
                  <Photo type={"view"} src={photo.url} />
                </div>
              ))
            ) : (
              <p>No photos available.</p>
            )}
          </div>
          <div
            className="profile-photos-view-more-button"
            onClick={() => setMainView("photos")}
          >
            View more photos
          </div>
        </div>
        <div
          className={`profile-friends-container ${isLightMode ? "light-mode-3" : "dark-mode-3"}`}
        >
          <div className="profile-friends-top-section">
            <div className="profile-friends-text">Friends: </div>
            <div className="profile-friends-text">{user.friends.length}</div>
          </div>
          <div className="profile-friends">
            {user.friends && user.friends.length > 0 ? (
              people
                .filter((person) => user.friends.includes(person.user_id))
                .map((person) => (
                  <UserInfo
                    type={"vertical"}
                    key={person.user_id}
                    src={person.profile_photo}
                    name={person.full_name}
                  />
                ))
            ) : (
              <p>No friends SadFace</p>
            )}
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
