import { useContext } from "react";
import CreatePost from "./post/CreatePost";
import Post from "./post/Post";
import { MainViewContext } from "../../../contexts/MainViewContext";
import { LightModeContext } from "../../../contexts/LightModeContext";

const Feed = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { mainView } = useContext(MainViewContext);
  return (
    <div
      className={`feed-container ${isLightMode ? "light-mode-3" : "dark-mode-3"}`}
    >
      {mainView === "mainFeed" ? <CreatePost /> : ""}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
