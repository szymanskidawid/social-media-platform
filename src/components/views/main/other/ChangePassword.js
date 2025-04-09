import { useContext, useState } from "react";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { DataContext } from "../../../../contexts/DataContext";
import InputField from "../../../small-components/InputField";
import MainButton from "../../../small-components/MainButton";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

const ChangePassword = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { user } = useContext(DataContext);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [newPasswordMismatch, setNewPasswordMismatch] = useState(false);

  const navigate = useNavigate();

  const handleChangePassword = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const oldPassword = formData.get("oldPassword");
    const newPassword = formData.get("newPassword");
    const repeatNewPassword = formData.get("repeatNewPassword");

    if (newPassword !== repeatNewPassword) {
      setNewPasswordMismatch(true);
    }

    setNewPasswordMismatch(false);

    try {
      const response = await fetch(
        //"https://social-media-platform-backend-l5h4.onrender.com/logins/update",
        `http://localhost:4000/logins/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            loginId: user.login_id,
            oldPassword,
            newPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
      } else if (response) {
        setIncorrectPassword(true);
      } else {
        console.log("Password change failed", data.error);
      }

      setIncorrectPassword(false);
    } catch (error) {
      console.log("There was an error: ", error);
    }
  };

  return (
    <div
      className={`change-password-container ${isLightMode ? "light-mode-2" : "dark-mode-2"}`}
    >
      <form
        className="change-password-form"
        onSubmit={handleChangePassword}
        method="PUT"
      >
        <InputField name="oldPassword" placeholder="Old Password" required />
        <InputField name="newPassword" placeholder="New Password" required />
        <InputField
          name="repeatNewPassword"
          placeholder="Repeat New Password"
          required
        />
        <MainButton type="submit" text={"Change"} />
      </form>
      {incorrectPassword ? (
        <Alert severity="error">Incorrect password!</Alert>
      ) : (
        ""
      )}
      {newPasswordMismatch ? (
        <Alert severity="error">New passwords do not match!</Alert>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChangePassword;
