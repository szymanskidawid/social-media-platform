import { useContext } from "react";
import Logo from "../../small-components/Logo";
import { ContainerViewContext } from "../../../contexts/ContainerViewContext";
import InputField from "../../small-components/InputField";

const Header = () => {
  const { setContainerView } = useContext(ContainerViewContext);
  return (
    <header className="header-container">
      <div className="header-logo-container">
        <Logo />
      </div>
      <div className="header-search-container">
        <i className="header-icons fa-solid fa-magnifying-glass fa-2xl"></i>
        <InputField
          style={{ height: "40px", width: "300px" }}
          placeholder={"Search for something..."}
        />
      </div>
      <nav className="header-navbar-container">
        <i
          className="header-icons fa-solid fa-comment-dots fa-2xl"
          onClick={() => setContainerView("chats")}
        />
        <i
          className="header-icons fa-solid fa-circle-exclamation fa-2xl"
          onClick={() => setContainerView("notifications")}
        />
        <i
          className="header-icons fa-solid fa-gear fa-2xl"
          onClick={() => setContainerView("options")}
        />
      </nav>
    </header>
  );
};

export default Header;
