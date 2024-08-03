import { useContext } from "react";
import MainPageButton from "../../MainPageButton";
import { PageContext } from "../../../../../contexts/PageContext";

const OptionsWindow = () => {
  const { setPage } = useContext(PageContext);
  return (
    <div className="options-window-container">
      <MainPageButton text={"Dark Mode"} />
      <MainPageButton text={"Edit Profile"} />
      <MainPageButton text={"Log Out"} onClick={() => setPage("login")} />
    </div>
  );
};

export default OptionsWindow;
