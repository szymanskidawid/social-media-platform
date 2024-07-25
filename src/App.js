import { useState } from 'react';
import './App.css';
import LoginView from './components/views/LoginView';
import MainView from './components/views/MainView';

function App() {
  const [view, setView] = useState("login");

  let selectedView = (view) => {
    if (view === "login") {
      return <LoginView />
    } else if (view === "main") {
      return <MainView />
    }
  }

  return (
    <div className="App">
      {selectedView(view)}
    </div>
  );
}

export default App;
