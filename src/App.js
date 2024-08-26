import { useEffect, useState } from "react";
import "./App.css";
import ContextProviders from "./contexts/ContextProviders";
import Router from "./components/helpers/Router";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginPageView, setLoginPageView] = useState("loginView");
  const [containerView, setContainerView] = useState("");
  const [openChatWindow, setOpenChatWindow] = useState(false);
  const [user, setUser] = useState({});
  const [people, setPeople] = useState({});
  const [posts, setPosts] = useState({});
  const [selectedPersonId, setSelectedPersonId] = useState("");

  useEffect(() => {
    if (!isLightMode) {
      document.body.classList.add("dark-mode-4");
    } else {
      document.body.classList.remove("dark-mode-4");
    }
  }, [isLightMode]);

  return (
    <div className="App">
      <ContextProviders
        {...{
          isLightMode,
          setIsLightMode,
          isLoggedIn,
          setIsLoggedIn,
          loginPageView,
          setLoginPageView,
          containerView,
          setContainerView,
          openChatWindow,
          setOpenChatWindow,
          user,
          setUser,
          people,
          setPeople,
          posts,
          setPosts,
          selectedPersonId,
          setSelectedPersonId,
        }}
      >
        <Router />
      </ContextProviders>
    </div>
  );
}

export default App;
