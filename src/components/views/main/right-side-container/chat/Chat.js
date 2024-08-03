import { useContext } from "react";
import UserInfo from "../../../../small-components/UserInfo";
import { OpenChatWindowContext } from "../../../../../contexts/OpenChatWindowContext";

const Chat = () => {
  const { setOpenChatWindow } = useContext(OpenChatWindowContext);
  return (
    <div className="chat-window-container">
      <div className="chat-window-top">
        <UserInfo type={"horizontal"} />
        <div
          className="chat-window-close"
          onClick={() => setOpenChatWindow(false)}
        >
          X
        </div>
      </div>

      <div className="chat-history-container">Chat History</div>
      <div className="chat-bottom-section">
        <input type="text" placeholder="Write something..." />
        <div className="chat-send-button">Send</div>
      </div>
    </div>
  );
};

export default Chat;
