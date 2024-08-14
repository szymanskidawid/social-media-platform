import { useState } from "react";
import MainButton from "../views/main/MainButton";
import InputField from "./InputField";

const CommentsWindow = () => {
  const [commentsEmpty, setCommentsEmpty] = useState(true);
  return (
    <div className="comments-container">
      {commentsEmpty ? (
        <div className="comments-window-empty">There are no comments yet.</div>
      ) : (
        <div className="comments-window">Comments</div>
      )}
      <div className="comments-bot-section">
        <InputField
          style={{ width: "100%" }}
          placeholder={"Write a comment..."}
        />
        <MainButton text={"Send"} />
      </div>
    </div>
  );
};

export default CommentsWindow;
