import { useContext, useState } from "react";
import UserInfo from "../../../../small-components/UserInfo";
import Chat from "./Chat";
import { LightModeContext } from "../../../../../contexts/LightModeContext";
import { IdTrackingContext } from "../../../../../contexts/IdTrackingContext";
import { DataContext } from "../../../../../contexts/DataContext";

const ChatSelectionWindow = () => {
  const [openChatWindow, setOpenChatWindow] = useState(false);

  const { isLightMode } = useContext(LightModeContext);
  const { user, people, loading } = useContext(DataContext);
  const { setActiveChatId } = useContext(IdTrackingContext);

  const friends = people.filter((person) =>
    user.friends.includes(person.user_id)
  );

  const handleOpenChat = (friend) => {
    setOpenChatWindow(true);
    setActiveChatId(friend);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="chat-selection-container">
      <div
        className={`chat-selection-available-friends ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
      >
        {friends && friends.length > 0 ? (
          friends.map((friend) => (
            <UserInfo
              type={"horizontal"}
              key={friend.user_id}
              src={friend.profile_photo}
              name={friend.full_name}
              onClick={() => handleOpenChat(friend.user_id)}
            />
          ))
        ) : (
          <p>No friends, no chatting</p>
        )}
      </div>
      <div className="chat-selection-chat-container">
        {openChatWindow && (
          <Chat userId={user.user_id} setOpenChatWindow={setOpenChatWindow} />
        )}
      </div>
    </div>
  );
};

export default ChatSelectionWindow;
