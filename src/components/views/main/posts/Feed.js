import { useContext } from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { IdTrackingContext } from "../../../../contexts/IdTrackingContext";
import { DataContext } from "../../../../contexts/DataContext";
import { useLocation } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const Feed = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { user, posts, loading } = useContext(DataContext);
  const { selectedProfileId } = useContext(IdTrackingContext);

  const location = useLocation();
  const path = location.pathname;

  const profilePosts = posts.filter(
    (post) => post.user_id === selectedProfileId
  );
  const friendsPosts = posts.filter((post) =>
    user.friends.includes(post.user_id)
  );

  const displayedPosts = path === "/home" ? friendsPosts : profilePosts;

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className={`feed-container ${isLightMode ? "light-mode-3" : "dark-mode-4"}`}
    >
      {(path === "/home" || selectedProfileId === user.user_id) && (
        <CreatePost />
      )}
      {displayedPosts && displayedPosts.length > 0 ? (
        displayedPosts.map((post) => (
          <Post
            key={post.post_id}
            personId={post.user_id}
            timePosted={formatDistanceToNow(new Date(post.time_posted))}
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
