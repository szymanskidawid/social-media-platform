import { useContext, useState } from "react";
import { LightModeContext } from "../../../contexts/LightModeContext";
import { DataContext } from "../../../contexts/DataContext";
import MainButton from "../../small-components/MainButton";
import { useNavigate } from "react-router-dom";
import Photo from "../../small-components/Photo";
import InputField from "../../small-components/InputField";

const FirstLogin = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { loading } = useContext(DataContext);
  const [firstLoginView, setFirstLoginView] = useState("page1");

  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;

  const selectedFirstLoginView = (selection) => {
    switch (selection) {
      case "page1":
        return (
          <form className="first-login-form">
            <div className="first-login-fields">
              <label>First Name</label>
              <InputField name={"Name"} required />
            </div>
            <div className="first-login-fields">
              <label>Surname</label>
              <InputField name={"Surname"} required />
            </div>
            <MainButton
              text={"Next"}
              onClick={() => setFirstLoginView("page2")}
            />
          </form>
        );
      case "page2":
        return (
          <form className="first-login-form">
            <div className="first-login-fields">
              <label>Profile Picture</label>
              <Photo type={"change"} src="/assets/addNewPhoto.jpg" />
            </div>
            <MainButton
              text={"Next"}
              onClick={() => setFirstLoginView("page3")}
            />
          </form>
        );
      case "page3":
        return (
          <form className="first-login-form">
            <div className="first-login-fields">
              <label>Town</label>
              <InputField name={"Town"} />
            </div>
            <div className="first-login-fields">
              <label>School</label>
              <InputField name={"School"} />
            </div>
            <div className="first-login-fields">
              <label>Work</label>
              <InputField name={"Work"} />
            </div>
            <MainButton text={"Save"} onClick={() => navigate("/home")} />
          </form>
        );
    }
  };
  return (
    <div className="first-login-page-container">
      <div
        className={`first-login-content ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
      >
        {selectedFirstLoginView(firstLoginView)}
      </div>
    </div>
  );
};

export default FirstLogin;
