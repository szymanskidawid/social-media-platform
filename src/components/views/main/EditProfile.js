import InputField from "../../small-components/InputField";
import Picture from "../../small-components/Picture";
import MainPageButton from "./MainPageButton";

const EditProfile = () => {
  return (
    <div className="edit-profile-container">
      <div className="edit-profile-top">Edit Profile</div>
      <form className="edit-profile-content-container">
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
        <MainPageButton text={"Save changes"} />
      </form>
    </div>
  );
};

export default EditProfile;
