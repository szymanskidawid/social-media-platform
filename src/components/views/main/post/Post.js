import { useContext, useState } from "react";
import { MainViewContext } from "../../../../contexts/MainViewContext";
import UserInfo from "../../../small-components/UserInfo";
import Picture from "../../../small-components/Picture";
import CommentsWindow from "../../../small-components/CommentsWindow";
import LikesWindow from "../../../small-components/LikesWindow";
import { LightModeContext } from "../../../../contexts/LightModeContext";

const Post = () => {
  const { isLightMode } = useContext(LightModeContext);
  const [showLikes, setShowLikes] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const { setMainView } = useContext(MainViewContext);

  return (
    <div
      className={`post-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
    >
      <div className="post-top-section">
        <div className="post-top-user-info">
          <UserInfo
            type={"horizontal"}
            onClick={() => setMainView("profile")}
          />
        </div>
        <div className="post-top-time-posted">Posted 12 hours ago</div>
      </div>
      <div className="post-top-description">Look at my new picture!</div>
      <div className="post-image">
        <Picture src={"https://picsum.photos/id/237/400/400"} />
      </div>
      <div className="post-bot-section">
        <div className="post-bot-like">
          <div
            className="post-bot-like-counter"
            onClick={() => setShowLikes(!showLikes)}
          >
            0
          </div>
          <i class="icon-light-mode fa-solid fa-thumbs-up fa-xl"></i>
        </div>
        <div className="post-bot-comment">
          <div className="post-bot-comment-text">Comment</div>
          <i
            class="icon-light-mode fa-solid fa-comment fa-xl"
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
        <CommentsWindow />
      </div>
    </div>
  );
};

export default Post;
