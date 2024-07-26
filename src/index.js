import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/LoginView.css';
import './styles/MainView.css';
import './styles/Header.css';
import './styles/Logo.css';
import './styles/Feed.css';
import './styles/Post.css';
import './styles/Sidebar.css';
import './styles/RightSideWindow.css';
import './styles/CreatePost.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
