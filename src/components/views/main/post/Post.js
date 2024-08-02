import { useContext, useState } from "react";
import { MainViewContext } from "../../../../contexts/MainViewContext";
import UserInfo from "../../../small-components/UserInfo";
import InputField from "../../../small-components/InputField";
import MainSectionButton from "../MainPageButton";

const Post = () => {
  const [commentsOpen, setCommentsOpen] = useState(false);
  const { setMainView } = useContext(MainViewContext);

  return (
    <div className="post-container">
      <div className="post-top-section">
        <div className="post-top-user-info">
          <UserInfo onClick={() => setMainView("profile")} />
        </div>
        <div className="post-top-time-posted">Posted 12 hours ago</div>
      </div>
      <div className="post-top-description">Look at my new picture!</div>
      <div className="post-image">
        <img src="https://picsum.photos/id/237/1000/800" />
      </div>
      <div className="post-bot-section">
        <div className="post-bot-like">
          <div className="post-bot-like-counter">0</div>
          <i class="icon fa-solid fa-thumbs-up fa-xl"></i>
        </div>
        <div className="post-bot-comment">
          <div className="post-bot-comment-text">Comment</div>
          <i
            class="icon fa-solid fa-comment fa-xl"
            onClick={() => setCommentsOpen(!commentsOpen)}
          ></i>
        </div>
      </div>
      <div className={`post-comments-container ${commentsOpen ? "open" : ""}`}>
        <div className="post-comments">Comments</div>
        <div className="post-comments-bot">
          <InputField
            style={{ width: "100%" }}
            placeholder={"Write a comment..."}
          />
          <MainSectionButton text={"Send"} />
        </div>
      </div>
    </div>
  );
};

export default Post;
