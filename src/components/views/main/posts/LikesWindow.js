import { useContext } from "react";
import UserInfo from "../../../small-components/UserInfo";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { DataContext } from "../../../../contexts/DataContext";

const LikesWindow = ({ likesIDs }) => {
  const { isLightMode } = useContext(LightModeContext);
  const { people, loading } = useContext(DataContext);

  const selectedPeople = people.filter((person) =>
    likesIDs.includes(person.user_id)
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className={`likes-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
    >
      <div className="likes-container-top-section">{`Likes ${likesIDs.length}`}</div>
      <div className="likes-container-people">
        {selectedPeople && selectedPeople.length > 0 ? (
          selectedPeople.map((person) => (
            <UserInfo
              personId={person.user_id}
              type={"horizontal"}
              src={person.profile_photo}
              name={person.full_name}
            />
          ))
        ) : (
          <p>No likes</p>
        )}
      </div>
    </div>
  );
};

export default LikesWindow;
