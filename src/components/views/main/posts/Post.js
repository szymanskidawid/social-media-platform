import { useContext, useState } from "react";
import UserInfo from "../../../small-components/UserInfo";
import Photo from "../../../small-components/Photo";
import CommentsWindow from "./CommentsWindow";
import LikesWindow from "./LikesWindow";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { PeopleContext } from "../../../../contexts/PeopleContext";

const Post = ({ personId, timePosted, postMessage, src, commentsId }) => {
  const { isLightMode } = useContext(LightModeContext);
  const [showLikes, setShowLikes] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const { people } = useContext(PeopleContext);

  const person = people.find((person) => person.user_id === personId);

  return (
    <div
      className={`post-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
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
        <div className="post-top-time-posted">{timePosted}</div>
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
            0
          </div>
          <i className="icon-light-mode fa-solid fa-thumbs-up fa-xl"></i>
        </div>
        <div className="post-bot-comment">
          <div className="post-bot-comment-text">Comment</div>
          <i
            className="icon-light-mode fa-solid fa-comment fa-xl"
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
          <LikesWindow />
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
