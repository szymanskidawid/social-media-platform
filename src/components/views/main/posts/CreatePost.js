import { useContext } from "react";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import InputField from "../../../small-components/InputField";
import MainButton from "../../../small-components/MainButton";
import { DataContext } from "../../../../contexts/DataContext";
import { getTimeAndDate } from "../../../helpers/getTimeAndDate";

const CreatePost = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { user, posts, setPosts } = useContext(DataContext);

  const handleCreatePost = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const timePosted = getTimeAndDate();
    const message = formData.get("postMessage");
    const photo = "";

    console.log(message);

    try {
      const response = await fetch(`http://localhost:4000/posts/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id,
          time_posted: timePosted,
          post_message: message,
          post_photo: photo,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setPosts((posts) => [...posts, data]);
      }
    } catch (error) {
      console.log("There was an error: ", error);
    }
  };

  return (
    <form
      className={`create-post-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
      onSubmit={handleCreatePost}
    >
      <InputField name="postMessage" placeholder={"What's on your mind?"} />
      <div className="create-post-bottom-section">
        <div className="create-post-icons">
          <i
            className={`icon-${isLightMode ? "light-mode" : "dark-mode"} fa-solid fa-image fa-xl`}
          ></i>
        </div>
        <MainButton type="submit" text={"Send"} />
      </div>
    </form>
  );
};

export default CreatePost;
