import CreatePost from "./post/CreatePost"
import Post from "./post/Post"

const Feed = () => {
  return (
    <div className="feed-container">
      <CreatePost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed
