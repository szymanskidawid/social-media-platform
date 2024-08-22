const UserInfo = ({ type, src, onClick, name }) => {
  return (
    <div className={`user-info-container-${type}`} onClick={onClick}>
      <div className="user-info-photo">
        <img src={src} />
      </div>
      <div className="user-info-name">{name}</div>
    </div>
  );
};

export default UserInfo;
