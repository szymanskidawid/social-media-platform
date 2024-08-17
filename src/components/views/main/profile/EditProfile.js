import { useContext } from "react";
import InputField from "../../../small-components/InputField";
import Picture from "../../../small-components/Picture";
import MainButton from "../../../small-components/MainButton";
import { LightModeContext } from "../../../../contexts/LightModeContext";

const EditProfile = () => {
  const { isLightMode } = useContext(LightModeContext);
  return (
    <div
      className={`edit-profile-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
    >
      <div className="edit-profile-top-section">Edit Profile</div>
      <form className="edit-profile-form">
        <div className="edit-profile-change-photo-container">
          <label>Change Background Picture</label>
          <div className="edit-profile-photo">
            <Picture src={"https://picsum.photos/id/236/400/400"} />
          </div>
        </div>
        <div className="edit-profile-change-photo-container">
          <label>Change Profile Picture</label>
          <div className="edit-profile-photo">
            <Picture src={"https://picsum.photos/id/237/400/400"} />
          </div>
        </div>
        <div className="edit-profile-fields">
          <label>Name</label>
          <InputField name={"Name"} />
        </div>
        <div className="edit-profile-fields">
          <label>Surname</label>
          <InputField name={"Surname"} />
        </div>
        <div className="edit-profile-fields">
          <label>Town</label>
          <InputField name={"Town"} />
        </div>
        <div className="edit-profile-fields">
          <label>School</label>
          <InputField name={"School"} />
        </div>
        <div className="edit-profile-fields">
          <label>Work</label>
          <InputField name={"Work"} />
        </div>
        <MainButton text={"Save changes"} />
      </form>
    </div>
  );
};

export default EditProfile;
