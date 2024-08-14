import InputField from "../../small-components/InputField";
import MainPageButton from "./MainPageButton";

const EditProfile = () => {
  return (
    <div className="edit-profile-container">
      <div className="edit-profile-top">Edit Profile</div>
      <div className="edit-profile-content-container">
        <div className="edit-profile-content">
          <label>Name</label>
          <InputField name={"Name"} />
        </div>
        <div className="edit=profile-content">
          <label>Surname</label>
          <InputField name={"Surname"} />
        </div>
        <div className="edit=profile-content">
          <label>Town</label>
          <InputField name={"Town"} />
        </div>
        <div className="edit=profile-content">
          <label>School</label>
          <InputField name={"School"} />
        </div>
        <div className="edit=profile-content">
          <label>Work</label>
          <InputField name={"Work"} />
        </div>
      </div>
      <div className="edit-profile-bottom">
        <MainPageButton text={"Save changes"} />
      </div>
    </div>
  );
};

export default EditProfile;
