import { useContext } from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { PostsContext } from "../../../../contexts/PostsContext";
import { UserContext } from "../../../../contexts/UserContext";
import { SelectedPersonIdContext } from "../../../../contexts/SelectedPersonIdContext";

const Feed = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { posts } = useContext(PostsContext);
  const { user } = useContext(UserContext);
  const { selectedPersonId } = useContext(SelectedPersonIdContext);

  const profilePosts = posts.filter(
    (post) => post.user_id === selectedPersonId
  );
  const friendsPosts = posts.filter((post) =>
    user.friends.includes(post.user_id)
  );

  const displayedPosts = selectedPersonId ? profilePosts : friendsPosts;

  return (
    <div
      className={`feed-container ${isLightMode ? "light-mode-3" : "dark-mode-3"}`}
    >
      {selectedPersonId === "" ||
        (selectedPersonId === user.user_id && <CreatePost />)}
      {displayedPosts && displayedPosts.length > 0 ? (
        displayedPosts.map((post) => (
          <Post
            key={post.post_id}
            personId={post.user_id}
            timePosted={post.time_posted}
            postMessage={post.post_message}
            src={post.post_photo}
            likesIDs={post.post_likes}
            commentsId={post.post_comments_id}
          />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default Feed;
