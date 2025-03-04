import { useContext, useState } from "react";
import { LightModeContext } from "../../../contexts/LightModeContext";
import { DataContext } from "../../../contexts/DataContext";
import MainButton from "../../small-components/MainButton";
import { useNavigate } from "react-router-dom";
import Photo from "../../small-components/Photo";
import InputField from "../../small-components/InputField";

const FirstLogin = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { user, loading } = useContext(DataContext);
  const [firstLoginView, setFirstLoginView] = useState("page1");
  const [newUserData, setNewUserData] = useState({});

  const navigate = useNavigate();

  const handleFirstStep = (event) => {
    event.preventDefault();

    const formElement = event.target.closest("form");
    const formData = new FormData(formElement);
    setNewUserData({
      name: formData.get("name"),
      surname: formData.get("surname"),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    setNewUserData((previousData) => ({
      ...previousData,
      town: formData.get("town"),
      school: formData.get("school"),
      work: formData.get("work"),
    }));

    try {
      const response = await fetch(
        //"https://social-media-platform-backend-l5h4.onrender.com/logins/create",
        `http://localhost:4000/people/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            loginId: user._id,
            ...newUserData,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        updateFirstLoginBoolean();
      } else {
        console.log("Person creation failed", data.error);
      }
    } catch (error) {
      console.log("There was an error: ", error);
    }
  };

  const updateFirstLoginBoolean = async () => {
    try {
      console.log(user._id);
      const response = await fetch(
        //"https://social-media-platform-backend-l5h4.onrender.com/logins/create",
        `http://localhost:4000/logins/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            loginId: user._id,
            firstLogin: false,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        navigate("/home");
      } else {
        console.log("first_login update failed", data.error);
      }
    } catch (error) {
      console.log("There was an error: ", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  const selectedFirstLoginView = (selection) => {
    switch (selection) {
      case "page1":
        return (
          <>
            <InputField name="name" placeholder="Name" required />
            <InputField name="surname" placeholder="Surname" required />
            <MainButton
              text={"Next"}
              onClick={(event) => {
                handleFirstStep(event);
                setFirstLoginView("page2");
              }}
            />
          </>
        );
      case "page2":
        return (
          <>
            <div className="first-login-fields">
              <label>Profile Picture</label>
              <Photo type={"change"} src="/assets/addNewPhoto.jpg" />
            </div>
            <InputField name="town" placeholder="Town" />
            <InputField name="school" placeholder="School" />
            <InputField name="work" placeholder="Work" />
            <MainButton type="submit" text={"Save"} />
          </>
        );
    }
  };
  return (
    <div className="first-login-page-container">
      <div
        className={`first-login-content ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
      >
        <form
          className="first-login-form"
          onSubmit={handleSubmit}
          method="POST"
        >
          {selectedFirstLoginView(firstLoginView)}
        </form>
      </div>
    </div>
  );
};

export default FirstLogin;
