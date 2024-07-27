const CreatePost = () => {
  return (
    <div className="create-post-container">
      <input
        className="create-post-text"
        type="text"
        placeholder="What is on your mind right now?"
      />
      <div className="create-post-send">Send</div>
    </div>
  );
};

export default CreatePost;
