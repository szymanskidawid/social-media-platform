import { useContext } from "react";
import { IdTrackingContext } from "../../contexts/IdTrackingContext";
import { useNavigate } from "react-router-dom";

const UserInfo = ({ personId, type, src, name, onClick }) => {
  const { setSelectedProfileId } = useContext(IdTrackingContext);

  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedProfileId(personId);
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
