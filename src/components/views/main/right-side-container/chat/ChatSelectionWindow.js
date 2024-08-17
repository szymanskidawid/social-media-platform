import { useContext } from "react";
import UserInfo from "../../../../small-components/UserInfo";
import Chat from "./Chat";
import { OpenChatWindowContext } from "../../../../../contexts/OpenChatWindowContext";
import { LightModeContext } from "../../../../../contexts/LightModeContext";

const ChatSelectionWindow = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { openChatWindow, setOpenChatWindow } = useContext(
    OpenChatWindowContext
  );

  return (
    <div className="chat-selection-container">
      <div
        className={`chat-selection-available-friends ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
      >
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
