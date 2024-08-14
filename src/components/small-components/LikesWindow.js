import UserInfo from "./UserInfo";

const LikesWindow = () => {
  return (
    <div className="likes-container">
      <div className="likes-container-top">Likes 5</div>
      <div className="likes-container-people">
        <UserInfo type={"horizontal"} />
        <UserInfo type={"horizontal"} />
        <UserInfo type={"horizontal"} />
        <UserInfo type={"horizontal"} />
        <UserInfo type={"horizontal"} />
        <UserInfo type={"horizontal"} />
        <UserInfo type={"horizontal"} />
      </div>
    </div>
  );
};

export default LikesWindow;
