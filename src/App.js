import { useEffect, useState } from "react";
import "./App.css";
import ContextProviders from "./contexts/ContextProviders";
import Router from "./components/helpers/Router";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [containerView, setContainerView] = useState("");
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
          containerView,
          setContainerView,
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
