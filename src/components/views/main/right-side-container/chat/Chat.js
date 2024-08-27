import { useContext } from "react";
import UserInfo from "../../../../small-components/UserInfo";
import InputField from "../../../../small-components/InputField";
import MainButton from "../../../../small-components/MainButton";
import { LightModeContext } from "../../../../../contexts/LightModeContext";
import { ChatsContext } from "../../../../../contexts/ChatsContext";
import { SelectedPersonIdContext } from "../../../../../contexts/SelectedPersonIdContext";
import { PeopleContext } from "../../../../../contexts/PeopleContext";

const Chat = ({ userId, setOpenChatWindow }) => {
  const { isLightMode } = useContext(LightModeContext);
  const { chats } = useContext(ChatsContext);
  const { people } = useContext(PeopleContext);
  const { selectedPersonId } = useContext(SelectedPersonIdContext);

  const friend = people.find((person) => person.user_id === selectedPersonId);

  const selectedChat = chats.filter(
    (chat) =>
      chat.user_ids.includes(userId) && chat.user_ids.includes(friend.user_id)
  );

  console.log({ selectedChat });

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
      <div className="chat-window-history">
        {selectedChat && selectedChat.length > 0 ? (
          selectedChat.map((chatGroup) =>
            chatGroup.chat_messages.map((message) => (
              <div
                className={`chat-message-${message.user_id === userId ? "user" : "friend"}`}
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
        <InputField placeholder={"Chat with your friend :)"} />
        <MainButton text={"Send"} />
      </div>
    </div>
  );
};

export default Chat;
