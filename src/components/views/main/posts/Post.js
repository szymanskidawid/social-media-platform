import { useContext, useState } from "react";
import UserInfo from "../../../small-components/UserInfo";
import Photo from "../../../small-components/Photo";
import CommentsWindow from "./CommentsWindow";
import LikesWindow from "./LikesWindow";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { DataContext } from "../../../../contexts/DataContext";

const Post = ({
  personId,
  timePosted,
  postMessage,
  src,
  likesIDs,
  commentsId,
}) => {
  const { isLightMode } = useContext(LightModeContext);
  const [showLikes, setShowLikes] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const { people, comments, loading } = useContext(DataContext);

  const person = people.find((person) => person.user_id === personId);

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className={`post-container ${isLightMode ? "light-mode-2" : "dark-mode-3"}`}
    >
      <div className="post-top-section">
        <div className="post-top-user-info">
          {person && (
            <UserInfo
              personId={person.user_id}
              type={"horizontal"}
              src={person.profile_photo}
              name={person.full_name}
            />
          )}
        </div>
        <div className="post-top-time-posted">{`${timePosted} ago`}</div>
      </div>
      <div className="post-top-description">{postMessage}</div>
      {src !== "" ? (
        <div className="post-image">
          <Photo type={"view"} src={src} />
        </div>
      ) : (
        ""
      )}
      <div className="post-bot-section">
        <div className="post-bot-like">
          <div
            className="post-bot-like-counter"
            onClick={() => setShowLikes(!showLikes)}
          >
            {likesIDs.length}
          </div>
          <i
            className={`icon-${isLightMode ? "light-mode" : "dark-mode"} fa-solid fa-thumbs-up fa-xl`}
          ></i>
        </div>
        <div className="post-bot-comment">
          <div className="post-bot-comment-text">{`Comments ${comments.find((postComments) => postComments.post_comments_id === commentsId)?.comments.length || 0}`}</div>
          <i
            className={`icon-${isLightMode ? "light-mode" : "dark-mode"} fa-solid fa-comment fa-xl`}
            onClick={() => {
              setShowComments(!showComments);
            }}
          ></i>
        </div>
      </div>
      {showLikes ? (
        <div
          className="post-likes-container"
          onClick={() => {
            setShowLikes(!showLikes);
          }}
        >
          <LikesWindow likesIDs={likesIDs} />
        </div>
      ) : (
        ""
      )}

      <div className={`post-hidden-container ${showComments ? "open" : ""}`}>
        <CommentsWindow commentsId={commentsId} />
      </div>
    </div>
  );
};

export default Post;
