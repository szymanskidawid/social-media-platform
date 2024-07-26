import Feed from "../main/Feed"
import Header from "../main/Header"

const MainView = () => {
  return (
    <>
      <Header />
      <div className="main-view-container">
        <Feed />
      </div>
    </> 
  )
}

export default MainView
