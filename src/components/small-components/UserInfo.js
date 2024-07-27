const UserInfo = ({ onClick }) => {
  return (
    <div className="user-info-container" onClick={onClick}>
      <div className="user-info-picture">Photo</div>
      <div className="user-info-name">Name Surname</div>
    </div>
  );
};

export default UserInfo;
