import InputField from "../../../small-components/InputField";
import MainSectionButton from "../MainPageButton";

const CreatePost = () => {
  return (
    <div className="create-post-container">
      <InputField
        style={{ width: "max(100% - 18px)", height: "100%" }}
        placeholder={"Write a comment..."}
      />
      <div className="create-post-bottom">
        <div className="create-post-icons">
          <i class="icon fa-solid fa-image fa-xl"></i>
        </div>
        <MainSectionButton text={"Send"} />
      </div>
    </div>
  );
};

export default CreatePost;
