import { useContext, useState } from "react";
import { LightModeContext } from "../../../../contexts/LightModeContext";
import { DataContext } from "../../../../contexts/DataContext";
import InputField from "../../../small-components/InputField";
import MainButton from "../../../small-components/MainButton";
import { Alert } from "@mui/material";

const ChangePassword = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { user } = useContext(DataContext);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [samePassword, setSamePassword] = useState(false);
  const [newPasswordMismatch, setNewPasswordMismatch] = useState(false);
  const [isPasswordChangeSuccessful, setIsPasswordChangeSuccessful] =
    useState(false);

  const handleChangePassword = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const oldPassword = formData.get("oldPassword");
    const newPassword = formData.get("newPassword");
    const repeatNewPassword = formData.get("repeatNewPassword");

    setIncorrectPassword(false);
    setSamePassword(false);
    setNewPasswordMismatch(false);
    setIsPasswordChangeSuccessful(false);

    if (newPassword !== repeatNewPassword) {
      setNewPasswordMismatch(true);
      return;
    }

    if (oldPassword === newPassword) {
      setSamePassword(true);
      return;
    }

    try {
      const response = await fetch(
        //"https://social-media-platform-backend-l5h4.onrender.com/logins/changePassword",
        `http://localhost:4000/logins/changePassword`,
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
        setIsPasswordChangeSuccessful(true);
        console.log("Password change successful!");
      } else {
        setIncorrectPassword(true);
        console.log("Password change failed: ", data.error);
      }
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
      {samePassword ? (
        <Alert severity="error">
          New password cannot be the same as old password!
        </Alert>
      ) : (
        ""
      )}
      {newPasswordMismatch ? (
        <Alert severity="error">New passwords do not match!</Alert>
      ) : (
        ""
      )}
      {isPasswordChangeSuccessful ? (
        <Alert severity="success">Password Changed!</Alert>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChangePassword;
