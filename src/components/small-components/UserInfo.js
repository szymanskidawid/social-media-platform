const UserInfo = ({ type, onClick }) => {
  return (
    <div className={`user-info-container-${type}`} onClick={onClick}>
      <div className="user-info-picture">
        <img src="https://picsum.photos/id/237/40/40" />
      </div>
      <div className="user-info-name">Great Dog</div>
    </div>
  );
};

export default UserInfo;
