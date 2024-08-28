import { useContext } from "react";
import UserInfo from "../../../small-components/UserInfo";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { SelectedPersonIdContext } from "../../../../contexts/SelectedPersonIdContext";
import { DataContext } from "../../../../contexts/DataContext";

const Friends = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { people, loading } = useContext(DataContext);
  const { selectedPersonId } = useContext(SelectedPersonIdContext);

  const selectedPerson = people.find(
    (person) => person.user_id === selectedPersonId
  );

  const recommendedFriends = people.filter(
    (potentialFriend) =>
      potentialFriend.user_id !== selectedPerson.user_id &&
      !(selectedPerson.friends || []).includes(potentialFriend.user_id)
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
            .filter((person) => selectedPerson.friends.includes(person.user_id))
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
                personId={potentialFriend.user_id}
                type={"vertical"}
                key={potentialFriend.user_id}
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
