import { useContext } from "react";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import InputField from "../../../small-components/InputField";
import MainButton from "../../../small-components/MainButton";

const CreatePost = () => {
  const { isLightMode } = useContext(LightModeContext);
  return (
    <div
      className={`create-post-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
    >
      <InputField
        style={{ width: "max(100% - 18px)", height: "100%" }}
        placeholder={"Write a comment..."}
      />
      <div className="create-post-bottom-section">
        <div className="create-post-icons">
          <i
            className={`icon-${isLightMode ? "light-mode" : "dark-mode"} fa-solid fa-image fa-xl`}
          ></i>
        </div>
        <MainButton text={"Send"} />
      </div>
    </div>
  );
};

export default CreatePost;
