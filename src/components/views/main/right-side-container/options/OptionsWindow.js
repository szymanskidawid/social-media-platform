import { useContext } from "react";
import MainButton from "../../../../small-components/MainButton";
import { LightModeContext } from "../../../../../contexts/LightModeContext";
import { useNavigate } from "react-router-dom";
import { LoginStateContext } from "../../../../../contexts/LoginStateContext";

const OptionsWindow = () => {
  const { isLightMode, setIsLightMode } = useContext(LightModeContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginStateContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate("/login");
  };
  return (
    <div className="options-window-container">
      <MainButton
        text={isLightMode ? "Dark Mode" : "Light Mode"}
        onClick={() => setIsLightMode(!isLightMode)}
      />
      <MainButton text={"Log Out"} onClick={handleLogout} />
    </div>
  );
};

export default OptionsWindow;
