import { useEffect, useState } from "react";
import "./App.css";
import LoginPage from "./components/views/login/LoginPage";
import MainPage from "./components/views/main/MainPage";
import ContextProviders from "./contexts/ContextProviders";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [page, setPage] = useState("login");
  const [loginPageView, setLoginPageView] = useState("loginView");
  const [mainView, setMainView] = useState("mainFeed");
  const [containerView, setContainerView] = useState("");
  const [openChatWindow, setOpenChatWindow] = useState(false);

  const selectedView = (selection) => {
    if (selection === "login") {
      return <LoginPage />;
    } else if (selection === "main") {
      return <MainPage />;
    }
  };

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
          page,
          setPage,
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
        {selectedView(page)}
      </ContextProviders>
    </div>
  );
}

export default App;
