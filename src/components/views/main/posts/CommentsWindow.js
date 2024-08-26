import { useContext } from "react";
import MainButton from "../../../small-components/MainButton";
import InputField from "../../../small-components/InputField";
import { CommentsContext } from "../../../../contexts/CommentsContext";
import Comment from "./Comment";

const CommentsWindow = ({ commentsId }) => {
  const { comments } = useContext(CommentsContext);

  const selectedComments = comments.filter(
    (comment) => comment.post_comments_id === commentsId
  );

  return (
    <div className="comments-container">
      <div className="comments-window">
        {selectedComments && selectedComments.length > 0 ? (
          selectedComments.map((commentGroup) =>
            commentGroup.comments.map((comment) => (
              <Comment
                key={comment.comment_id}
                personId={comment.user_id}
                text={comment.comment}
              />
            ))
          )
        ) : (
          <p>There are no comments yet.</p>
        )}
      </div>
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
