import UserInfo from "../../small-components/UserInfo";

const Friends = () => {
  return (
    <div className="friends-container">
      <div className="friends-top">
        <div className="friends-text">All Friends</div>
        <div className="friends-text">5</div>
      </div>
      <div className="friends-all">
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
      </div>
      <div className="friends-find-new">
        <div className="friends-find-new-text">Find new friends!</div>
        <div className="friends-find-all">
          <UserInfo />
          <UserInfo />
          <UserInfo />
          <UserInfo />
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Friends;
