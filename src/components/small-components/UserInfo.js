import { useContext } from "react";
import { SelectedPersonIdContext } from "../../contexts/SelectedPersonIdContext";
import { MainViewContext } from "../../contexts/MainViewContext";

const UserInfo = ({ personId, type, src, name }) => {
  const { setSelectedPersonId } = useContext(SelectedPersonIdContext);
  const { setMainView } = useContext(MainViewContext);

  const handleClick = () => {
    setSelectedPersonId(personId);
    setMainView("profile");
  };
  return (
    <div className={`user-info-container-${type}`} onClick={handleClick}>
      <div className="user-info-photo">
        <img src={src} />
      </div>
      <div className="user-info-name">{name}</div>
    </div>
  );
};

export default UserInfo;
