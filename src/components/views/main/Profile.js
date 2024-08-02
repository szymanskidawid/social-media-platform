import UserInfo from "../../small-components/UserInfo";
import Feed from "./Feed";

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-top-container">
          <div className="profile-background-pic-container">
            <img src="https://picsum.photos/id/237/400/400" />
          </div>

          <div className="profile-pic-container">
            <img src="https://picsum.photos/id/237/200/200" />
          </div>
        </div>
        <p className="profile-name">Great Dog</p>
        <div className="profile-info-container"></div>
        <div className="profile-friends-container">
          <div className="profile-friends-top">
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
          <div className="profile-friends-view-more-button">
            View more friends
          </div>
        </div>
        <Feed />
      </div>
    </>
  );
};

export default Profile;
