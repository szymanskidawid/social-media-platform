import { useContext } from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import { MainViewContext } from "../../../../contexts/MainViewContext";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { PostsContext } from "../../../../contexts/PostsContext";

const Feed = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { mainView } = useContext(MainViewContext);
  const { posts } = useContext(PostsContext);

  return (
    <div
      className={`feed-container ${isLightMode ? "light-mode-3" : "dark-mode-3"}`}
    >
      {mainView === "mainFeed" ? <CreatePost /> : ""}
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.post_id}
            personId={post.user_id}
            timePosted={post.time_posted}
            postMessage={post.post_message}
            src={post.post_photo}
            commentsId={[post.post_comments_id]}
          />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default Feed;
