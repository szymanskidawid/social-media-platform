import { useContext } from "react";
import UserInfo from "../../../small-components/UserInfo";
import { PeopleContext } from "../../../../contexts/PeopleContext";

const Comment = ({ personId, text }) => {
  const { people } = useContext(PeopleContext);

  const selectedPerson = people.find((person) => person.user_id === personId);

  return (
    <div className="comment-container">
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
