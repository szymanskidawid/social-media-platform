import { useContext } from "react";
import { SelectedPersonIdContext } from "../../contexts/SelectedPersonIdContext";
import { useNavigate } from "react-router-dom";

const UserInfo = ({ personId, type, src, name, onClick }) => {
  const { setSelectedPersonId } = useContext(SelectedPersonIdContext);

  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedPersonId(personId);
    navigate(`/home/profile/${personId}`);
  };
  return (
    <div
      className={`user-info-container-${type}`}
      onClick={onClick ? onClick : () => handleClick()}
    >
      <div className="user-info-photo">
        <img src={src} />
      </div>
      <div className="user-info-name">{name}</div>
    </div>
  );
};

export default UserInfo;
