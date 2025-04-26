import { useContext } from "react";
import Logo from "../../small-components/Logo";
import InputField from "../../small-components/InputField";
import { LightModeContext } from "../../../contexts/LightModeContext";
import { DataContext } from "../../../contexts/DataContext";
import { ContainerViewContext } from "../../../contexts/ContainerViewContext";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";

const Header = () => {
  const { isLightMode } = useContext(LightModeContext);
  const { user, notifications } = useContext(DataContext);
  const { setContainerView } = useContext(ContainerViewContext);

  const navigate = useNavigate();

  return (
    <header
      className={`header-container ${isLightMode ? "light-mode-2" : "dark-mode-4"}`}
    >
      <div className="header-logo-container">
        <Logo onClick={() => navigate("/home")} />
      </div>
      <div className="header-search-container">
        <i
          className={`icon-${isLightMode ? "light-mode" : "dark-mode"} fa-solid fa-magnifying-glass fa-2xl`}
        ></i>
        <InputField name="search" placeholder="Search for something..." />
      </div>
      <nav className="header-navbar-container">
        <i
          className={`icon-${isLightMode ? "light-mode" : "dark-mode"} fa-solid fa-comment-dots fa-2xl`}
          onClick={() => setContainerView("chats")}
        />
        <Badge
          badgeContent={
            notifications.filter(
              (notification) => notification.notified_user_id === user._id
            ).length
          }
          color="error"
          showZero={false}
        >
          <i
            className={`icon-${isLightMode ? "light-mode" : "dark-mode"} fa-solid fa-circle-exclamation fa-2xl`}
            onClick={() => setContainerView("notifications")}
          />
        </Badge>
        <i
          className={`icon-${isLightMode ? "light-mode" : "dark-mode"} fa-solid fa-gear fa-2xl`}
          onClick={() => setContainerView("options")}
        />
      </nav>
    </header>
  );
};

export default Header;
