import { useContext } from "react";
import MainButton from "../../../small-components/MainButton";
import InputField from "../../../small-components/InputField";
import Comment from "./Comment";
import { DataContext } from "../../../../contexts/DataContext";
import { LightModeContext } from "../../../../contexts/LightModeContext";

const CommentsWindow = ({ commentsId }) => {
  const { isLightMode } = useContext(LightModeContext);
  const { comments, loading } = useContext(DataContext);

  const selectedComments = comments.filter(
    (comment) => comment.post_comments_id === commentsId
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="comments-container">
      <div
        className={`comments-window ${isLightMode ? "light-mode-4" : "dark-mode-4"}`}
      >
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
