import UserInfo from "../../../../small-components/UserInfo";

const Chat = () => {
  return (
    <div className="chat-window-container">
      <UserInfo />
      <div className="chat-history-container">Chat History</div>
      <div className="chat-bottom-section">
        <input type="text" placeholder="Write something..." />
        <div className="chat-send-button">Send</div>
      </div>
    </div>
  );
};

export default Chat;
