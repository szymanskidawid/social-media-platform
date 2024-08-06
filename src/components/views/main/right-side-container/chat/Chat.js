import { useContext } from "react";
import UserInfo from "../../../../small-components/UserInfo";
import { OpenChatWindowContext } from "../../../../../contexts/OpenChatWindowContext";
import InputField from "../../../../small-components/InputField";
import MainPageButton from "../../MainPageButton";

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
          <i class="icon fa-solid fa-xmark fa-xl"></i>
        </div>
      </div>

      <div className="chat-history-container">Chat History</div>
      <div className="chat-bottom-section">
        <InputField placeholder={"Chat with your friend :)"} />
        <MainPageButton text={"Send"} />
      </div>
    </div>
  );
};

export default Chat;
