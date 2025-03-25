import { useContext, useEffect, useState } from "react";
import { LightModeContext } from "../../../contexts/LightModeContext";
import { DataContext } from "../../../contexts/DataContext";
import MainButton from "../../small-components/MainButton";
import { useNavigate } from "react-router-dom";
import Photo from "../../small-components/Photo";
import InputField from "../../small-components/InputField";

const FirstLogin = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { user, setUser, loading } = useContext(DataContext);
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

    setFirstLoginView("page2");
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
        setUser(data);
      } else {
        console.log("Person creation failed", data.error);
      }
    } catch (error) {
      console.log("There was an error: ", error);
    }
  };

  const updateFirstLoginBoolean = async () => {
    try {
      const response = await fetch(
        //"https://social-media-platform-backend-l5h4.onrender.com/logins/create",
        `http://localhost:4000/logins/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            loginId: user.login_id,
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

  useEffect(() => {
    if (user) {
      console.log({ user });
      updateFirstLoginBoolean();
    }
  }, [user]);

  if (loading) return <p>Loading...</p>;

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
          {firstLoginView === "page1" && (
            <>
              <InputField name="name" placeholder="Name" required />
              <InputField name="surname" placeholder="Surname" required />
              <MainButton text={"Next"} onClick={handleFirstStep} />
            </>
          )}

          {firstLoginView === "page2" && (
            <>
              <div className="first-login-fields">
                <label>Profile Picture</label>
                <Photo type={"change"} src="/assets/addNewPhoto.jpg" />
              </div>
              <InputField name="town" placeholder="Town" required />
              <InputField name="school" placeholder="School" required />
              <InputField name="work" placeholder="Work" required />
              <MainButton type="submit" text={"Save"} />
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default FirstLogin;
