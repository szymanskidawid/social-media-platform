import { useState } from "react";
import "./App.css";
import LoginPage from "./components/views/login/LoginPage";
import MainPage from "./components/views/main/MainPage";
import ContextProviders from "./contexts/ContextProviders";

function App() {
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

  return (
    <div className="App">
      <ContextProviders
        {...{
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
