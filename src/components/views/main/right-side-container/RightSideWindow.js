import { useContext } from "react";
import ChatSelectionWindow from "./chat/ChatSelectionWindow";
import NotificationsWindow from "./notification/NotificationsWindow";
import OptionsWindow from "./options/OptionsWindow";
import { ContainerViewContext } from "../../../../contexts/ContainerViewContext";

const RightSideContainer = () => {
    const { containerView } = useContext(ContainerViewContext);
    const selectedContainer = (selection) => {
        if (selection === "chats") {
            return <ChatSelectionWindow />
        } else if (selection === "notifications") {
            return <NotificationsWindow />
        } else if (selection === "options") {
            return <OptionsWindow />
        }
    }
  return (
    <div className="right-side-window-container">
      {selectedContainer(containerView)}
    </div>
  )
}

export default RightSideContainer
