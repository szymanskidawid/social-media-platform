import { useContext } from "react";
import UserInfo from "../../../small-components/UserInfo";
import { DataContext } from "../../../../contexts/DataContext";
import { LightModeContext } from "../../../../contexts/LightModeContext";

const Comment = ({ personId, text }) => {
  const { isLightMode } = useContext(LightModeContext);
  const { people, loading } = useContext(DataContext);

  const selectedPerson = people.find((person) => person.user_id === personId);

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className={`comment-container ${isLightMode ? "light-mode-1" : "dark-mode-2"}`}
    >
      {selectedPerson && (
        <UserInfo
          personId={selectedPerson.user_id}
          type={"horizontal"}
          key={selectedPerson.user_id}
          src={selectedPerson.profile_photo}
          name={selectedPerson.full_name}
        />
      )}
      <div className="comment-text">{text}</div>
    </div>
  );
};

export default Comment;
