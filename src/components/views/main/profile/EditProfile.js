import { useContext, useState } from "react";
import InputField from "../../../small-components/InputField";
import Photo from "../../../small-components/Photo";
import MainButton from "../../../small-components/MainButton";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { DataContext } from "../../../../contexts/DataContext";

const EditProfile = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { user, loading } = useContext(DataContext);
  const { isUserUpdateSuccessful, setIsUserUpdateSuccessful } = useState(false);

  const handleSaveChanges = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const surname = formData.get("surname");
    const town = formData.get("town");
    const school = formData.get("school");
    const work = formData.get("work");

    setIsUserUpdateSuccessful(false);

    try {
      const response = await fetch(
        //`https://social-media-platform-backend-l5h4.onrender.com/people/update${user._id}`,
        `http://localhost:4000/people/update/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            surname,
            town,
            school,
            work,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setIsUserUpdateSuccessful(true);
        setUser(data);
        console.log("Profile update successful!");
      } else {
        console.log("Profile update failed: ", data.error);
      }
    } catch (error) {
      console.log("There was an error: ", error);
    }
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
            onSubmit={handleSaveChanges}
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
              defaultValue={user.name}
              required
            />
            <InputField
              name="surname"
              placeholder="Surname"
              defaultValue={user.surname}
              required
            />
            <InputField
              name="town"
              placeholder="Town"
              defaultValue={user.town}
            />
            <InputField
              name="school"
              placeholder="School"
              defaultValue={user.school}
            />
            <InputField
              name="work"
              placeholder="Work"
              defaultValue={user.work}
            />
            <MainButton type="submit" text={"Save changes"} />
            {isUserUpdateSuccessful ? (
              <Alert severity="success">User Updated!</Alert>
            ) : (
              ""
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default EditProfile;
