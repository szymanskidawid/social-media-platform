import { useContext } from "react";
import InputField from "../../../small-components/InputField";
import Photo from "../../../small-components/Photo";
import MainButton from "../../../small-components/MainButton";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { DataContext } from "../../../../contexts/DataContext";

const EditProfile = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { user, loading } = useContext(DataContext);

  const handleSaveChanges = async (event) => {
    //TODO - Finish the function
    event.preventDefault();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {user && (
        <div
          className={`edit-profile-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
        >
          <div className="edit-profile-top-section">Edit Profile</div>
          <form
            className="edit-profile-form"
            onSubmit={() => handleSaveChanges}
            method="POST"
          >
            <div className="edit-profile-change-photo-container">
              <label>Change Background Photo</label>
              <div className="edit-profile-photo">
                <Photo type={"change"} src={user.background_photo} />
              </div>
            </div>
            <div className="edit-profile-change-photo-container">
              <label>Change Profile Photo</label>
              <div className="edit-profile-photo">
                <Photo type={"change"} src={user.profile_photo} />
              </div>
            </div>
            <InputField
              name="name"
              placeholder="Name"
              value={user.name}
              required
            />
            <InputField
              name="surname"
              placeholder="Surname"
              value={user.surname}
              required
            />
            <InputField
              name="town"
              placeholder="Town"
              value={user.town}
              required
            />
            <InputField
              name="school"
              placeholder="School"
              value={user.school}
              required
            />
            <InputField
              name="work"
              placeholder="Work"
              value={user.work}
              required
            />
            <MainButton type="submit" text={"Save changes"} />
          </form>
        </div>
      )}
    </>
  );
};

export default EditProfile;
