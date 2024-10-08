import { useContext } from "react";
import UserInfo from "../../../../small-components/UserInfo";
import InputField from "../../../../small-components/InputField";
import MainButton from "../../../../small-components/MainButton";
import { LightModeContext } from "../../../../../contexts/LightModeContext";
import { IdTrackingContext } from "../../../../../contexts/IdTrackingContext";
import { DataContext } from "../../../../../contexts/DataContext";

const Chat = ({ userId, setOpenChatWindow }) => {
  const { isLightMode } = useContext(LightModeContext);
  const { people, chats, loading } = useContext(DataContext);
  const { activeChatId } = useContext(IdTrackingContext);

  const friend = people.find((person) => person.user_id === activeChatId);

  const selectedChat = chats.filter(
    (chat) =>
      chat.user_ids.includes(userId) && chat.user_ids.includes(friend.user_id)
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className={`chat-window-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
    >
      <div className="chat-window-top-section">
        <UserInfo
          personId={friend.user_id}
          type={"horizontal"}
          src={friend.profile_photo}
          name={friend.full_name}
        />
        <div
          className="chat-window-close-btn"
          onClick={() => setOpenChatWindow(false)}
        >
          <i className="icon-light-mode fa-solid fa-xmark fa-xl"></i>
        </div>
      </div>
      <div
        className={`chat-window-history ${isLightMode ? "light-mode-4" : "dark-mode-4"}`}
      >
        {selectedChat && selectedChat.length > 0 ? (
          selectedChat.map((chatGroup) =>
            chatGroup.chat_messages.map((message) => (
              <div
                className={`chat-message-${message.user_id === userId ? "user" : "friend"} ${isLightMode ? "light-mode-1" : "dark-mode-2"}`}
                key={message.message_id}
              >
                {message.message}
              </div>
            ))
          )
        ) : (
          <p>No messages</p>
        )}
      </div>
      <div className="chat-window-bottom-section">
        <InputField
          style={{ width: "100%" }}
          placeholder={"Chat with your friend :)"}
        />
        <MainButton text={"Send"} />
      </div>
    </div>
  );
};

export default Chat;
