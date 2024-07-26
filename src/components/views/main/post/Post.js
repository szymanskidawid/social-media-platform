const Post = () => {
  return (
    <div className="post-container">
        <div className="post-top-section">
            <div className="post-top-user-info">
                User Info
            </div>
            <div className="post-top-time-posted">
                Posted 12 hours ago
            </div>  
        </div>
        <div className="post-top-description">
            Description
        </div>
        <div className="post-image">
            Image
        </div>
        <div className="post-bot-section">
            <div className="post-bot-like">
                Like
            </div>
            <div className="post-bot-comment">
                Comment
            </div>
        </div>
        <div className="post-comments-section">
                Comments Section
        </div>  
    </div>
  )
}

export default Post
