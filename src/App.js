import { useState } from 'react';
import './App.css';
import LoginView from './components/views/login/LoginView';
import MainView from './components/views/main/MainView';
import ContextProviders  from './contexts/ContextProviders';

function App() {
  const [view, setView] = useState("login");
  const [containerView, setContainerView] = useState("");
  const [openChatWindow, setOpenChatWindow] = useState(false);

  const selectedView = (selection) => {
    if (selection === "login") {
      return <LoginView />
    } else if (selection === "main") {
      return <MainView />
    }
  }

  return (
    <div className="App">
      <ContextProviders {...{ view, setView, containerView, setContainerView, openChatWindow, setOpenChatWindow }}>
        {selectedView(view)}
      </ContextProviders>
    </div>
  );
}

export default App;
