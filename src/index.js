import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/LoginPage.css";
import "./styles/MainPage.css";
import "./styles/Header.css";
import "./styles/Logo.css";
import "./styles/Feed.css";
import "./styles/Post.css";
import "./styles/CreatePost.css";
import "./styles/UserInfo.css";
import "./styles/Chat.css";
import "./styles/ChatSelectionWindow.css";
import "./styles/Notification.css";
import "./styles/InputField.css";
import "./styles/variables.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
