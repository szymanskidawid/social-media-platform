import { useContext } from "react";
import UserInfo from "../../../../small-components/UserInfo";
import Chat from "./Chat";
import { OpenChatWindowContext } from "../../../../../contexts/OpenChatWindowContext";

const ChatSelectionWindow = () => {
  const { openChatWindow, setOpenChatWindow } = useContext(
    OpenChatWindowContext
  );

  return (
    <div className="chat-section-container">
      <div className="chat-selection-available-friends-container">
        <UserInfo
          type={"horizontal"}
          onClick={() => setOpenChatWindow(!openChatWindow)}
        />
        <UserInfo
          type={"horizontal"}
          onClick={() => setOpenChatWindow(!openChatWindow)}
        />
        <UserInfo
          type={"horizontal"}
          onClick={() => setOpenChatWindow(!openChatWindow)}
        />
        <UserInfo
          type={"horizontal"}
          onClick={() => setOpenChatWindow(!openChatWindow)}
        />
      </div>
      <div className="chat-selection-chat-container">
        {openChatWindow && <Chat />}
      </div>
    </div>
  );
};

export default ChatSelectionWindow;
