import { useContext } from "react";
import UserInfo from "../../../small-components/UserInfo";
import Feed from "../posts/Feed";
import Photo from "../../../small-components/Photo";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { IdTrackingContext } from "../../../../contexts/IdTrackingContext";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../../contexts/DataContext";

const Profile = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { people, loading } = useContext(DataContext);
  const { selectedProfileId } = useContext(IdTrackingContext);

  const navigate = useNavigate();

  const selectedPerson = people.find(
    (person) => person.user_id === selectedProfileId
  );

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {selectedPerson && (
        <div
          className={`profile-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
        >
          <div className="profile-top-container">
            <div className="profile-background-pic-container">
              <Photo type={"view"} src={selectedPerson.background_photo} />
            </div>

            <div className="profile-pic-container">
              <Photo
                type={"view"}
                style={{ borderRadius: "100%" }}
                src={selectedPerson.profile_photo}
              />
            </div>
          </div>
          <p className="profile-name">{selectedPerson.full_name}</p>
          <div
            className={`profile-info-container ${isLightMode ? "light-mode-3" : "dark-mode-3"}`}
          >
            <div className="profile-info">
              <div className="profile-info-icon">
                <i className="fa-solid fa-city fa-xl"></i>
              </div>
              <div className="profile-info-text">{selectedPerson.town}</div>
            </div>
            <div className="profile-info">
              <div className="profile-info-icon">
                <i className="fa-solid fa-school fa-xl"></i>
              </div>
              <div className="profile-info-text">{selectedPerson.school}</div>
            </div>
            <div className="profile-info">
              <div className="profile-info-icon">
                <i className="fa-solid fa-briefcase fa-xl"></i>
              </div>
              <div className="profile-info-text">{selectedPerson.work}</div>
            </div>
          </div>
          <div
            className={`profile-photos-container ${isLightMode ? "light-mode-1" : "dark-mode-1"}`}
          >
            <div className="profile-photos-text">Photos</div>
            <div className="profile-photos">
              {selectedPerson.photos && selectedPerson.photos.length > 0 ? (
                selectedPerson.photos.map((photo) => (
                  <div className="profile-photo-container" key={photo.id}>
                    <Photo type={"view"} key={photo.id} src={photo.url} />
                  </div>
                ))
              ) : (
                <p>No photos available.</p>
              )}
            </div>
            <div
              className="profile-photos-view-more-button"
              onClick={() =>
                navigate(`/home/profile/${selectedPerson.user_id}/photos`)
              }
            >
              View more photos
            </div>
          </div>
          <div
            className={`profile-friends-container ${isLightMode ? "light-mode-3" : "dark-mode-3"}`}
          >
            <div className="profile-friends-top-section">
              <div className="profile-friends-text">Friends: </div>
              <div className="profile-friends-text">
                {selectedPerson.friends.length}
              </div>
            </div>
            <div className="profile-friends">
              {selectedPerson.friends && selectedPerson.friends.length > 0 ? (
                people
                  .filter((person) =>
                    selectedPerson.friends.includes(person.user_id)
                  )
                  .map((friend) => (
                    <UserInfo
                      personId={friend.user_id}
                      type={"vertical"}
                      key={friend.user_id}
                      src={friend.profile_photo}
                      name={friend.full_name}
                    />
                  ))
              ) : (
                <p>No friends SadFace</p>
              )}
            </div>
            <div
              className="profile-friends-view-more-button"
              onClick={() =>
                navigate(`/home/profile/${selectedPerson.user_id}/friends`)
              }
            >
              View more friends
            </div>
          </div>
          <Feed />
        </div>
      )}
    </>
  );
};

export default Profile;
