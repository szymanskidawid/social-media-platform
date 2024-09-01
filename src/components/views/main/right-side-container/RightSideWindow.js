import { useContext } from "react";
import ChatSelectionWindow from "./chat/ChatSelectionWindow";
import NotificationsWindow from "./notification/NotificationsWindow";
import OptionsWindow from "./options/OptionsWindow";
import { ContainerViewContext } from "../../../../contexts/ContainerViewContext";
import { LightModeContext } from "../../../../contexts/LightModeContext";

const RightSideContainer = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { containerView } = useContext(ContainerViewContext);
  const selectedContainer = (selection) => {
    if (selection === "chats") {
      return <ChatSelectionWindow />;
    } else if (selection === "notifications") {
      return <NotificationsWindow />;
    } else if (selection === "options") {
      return <OptionsWindow />;
    }
  };
  return (
    <>
      {containerView !== "" && (
        <div
          className={`right-side-window-container ${isLightMode ? "light-mode-3" : "dark-mode-2"}`}
        >
          {selectedContainer(containerView)}
        </div>
      )}
    </>
  );
};

export default RightSideContainer;
