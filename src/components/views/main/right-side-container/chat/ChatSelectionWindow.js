import { useContext } from "react"
import UserInfo from "../../../../small/UserInfo"
import Chat from "./Chat"
import { OpenChatWindowContext } from "../../../../../contexts/OpenChatWindowContext";

const ChatSelectionWindow = () => {
  const { openChatWindow, setOpenChatWindow } = useContext(OpenChatWindowContext);

  return (
    <div className="chat-section-container">
      <div className="chat-selection-available-friends-container">
        <UserInfo onClick={() => setOpenChatWindow(!openChatWindow)} />
        <UserInfo />
        <UserInfo />
        <UserInfo />
      </div>
      <div className="chat-selection-chat-container">
        {openChatWindow && <Chat />}
      </div>
    </div>
  )
}

export default ChatSelectionWindow
