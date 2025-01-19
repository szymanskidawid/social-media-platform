import { useContext } from "react";
import UserInfo from "../../../small-components/UserInfo";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { IdTrackingContext } from "../../../../contexts/IdTrackingContext";
import { DataContext } from "../../../../contexts/DataContext";

const Friends = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { people, loading } = useContext(DataContext);
  const { selectedProfileId } = useContext(IdTrackingContext);

  const selectedPerson = people.find(
    (person) => person._id === selectedProfileId
  );

  const recommendedFriends = people.filter(
    (potentialFriend) =>
      potentialFriend._id !== selectedPerson._id &&
      !(selectedPerson.friends || []).includes(potentialFriend._id)
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className={`friends-container ${isLightMode ? "light-mode-1" : "dark-mode-1"}`}
    >
      <div
        className={`friends-top-section ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
      >
        <div className="friends-text">All Friends:</div>
        <div className="friends-text">{selectedPerson.friends.length}</div>
      </div>
      <div className="friends-all">
        {selectedPerson.friends && selectedPerson.friends.length > 0 ? (
          people
            .filter((person) => selectedPerson.friends.includes(person._id))
            .map((friend) => (
              <UserInfo
                personId={friend._id}
                type={"vertical"}
                key={friend._id}
                src={friend.profile_photo}
                name={friend.full_name}
              />
            ))
        ) : (
          <p>No friends.</p>
        )}
      </div>
      <div className="friends-find-new">
        <div
          className={`friends-find-new-text ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
        >
          Find new friends!
        </div>
        <div className="friends-find-all">
          {recommendedFriends && recommendedFriends.length > 0 ? (
            recommendedFriends.map((potentialFriend) => (
              <UserInfo
                personId={potentialFriend._id}
                type={"vertical"}
                key={potentialFriend._id}
                src={potentialFriend.profile_photo}
                name={potentialFriend.full_name}
              />
            ))
          ) : (
            <p>No recommendations.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Friends;
