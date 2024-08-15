import { useEffect, useState } from "react";
import "./App.css";
import ContextProviders from "./contexts/ContextProviders";
import Router from "./components/helpers/Router";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginPageView, setLoginPageView] = useState("loginView");
  const [mainView, setMainView] = useState("mainFeed");
  const [containerView, setContainerView] = useState("");
  const [openChatWindow, setOpenChatWindow] = useState(false);

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
          mainView,
          setMainView,
          containerView,
          setContainerView,
          openChatWindow,
          setOpenChatWindow,
        }}
      >
        <Router />
      </ContextProviders>
    </div>
  );
}

export default App;
