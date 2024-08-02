import { useContext } from "react";
import CreatePost from "./post/CreatePost";
import Post from "./post/Post";
import { MainViewContext } from "../../../contexts/MainViewContext";

const Feed = () => {
  const { mainView } = useContext(MainViewContext);
  return (
    <div className="feed-container">
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
