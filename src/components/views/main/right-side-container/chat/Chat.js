import { useContext } from "react";
import UserInfo from "../../../../small-components/UserInfo";
import { OpenChatWindowContext } from "../../../../../contexts/OpenChatWindowContext";
import InputField from "../../../../small-components/InputField";
import MainButton from "../../../../small-components/MainButton";
import { LightModeContext } from "../../../../../contexts/LightModeContext";

const Chat = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { setOpenChatWindow } = useContext(OpenChatWindowContext);
  return (
    <div
      className={`chat-window-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
    >
      <div className="chat-window-top-section">
        <UserInfo type={"horizontal"} />
        <div
          className="chat-window-close-btn"
          onClick={() => setOpenChatWindow(false)}
        >
          <i class="icon-light-mode fa-solid fa-xmark fa-xl"></i>
        </div>
      </div>
      <div className="chat-window-history">Chat History</div>
      <div className="chat-window-bottom-section">
        <InputField placeholder={"Chat with your friend :)"} />
        <MainButton text={"Send"} />
      </div>
    </div>
  );
};

export default Chat;
