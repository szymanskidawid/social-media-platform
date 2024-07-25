import { useState } from 'react';
import './App.css';
import LoginView from './components/views/LoginView';
import MainView from './components/views/MainView';
import ContextProviders  from './contexts/ContextProviders';

function App() {
  const [view, setView] = useState("login");

  const selectedView = (selection) => {
    if (selection === "login") {
      return <LoginView />
    } else if (selection === "main") {
      return <MainView />
    }
  }

  return (
    <div className="App">
      <ContextProviders {...{ view, setView }}>
        {selectedView(view)}
      </ContextProviders>
    </div>
  );
}

export default App;
