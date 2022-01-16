import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styles from "./index.module.css";

function Message({ text }) {
  return (
    <div>
      <h1 className={styles.message__text}>{text}</h1>
    </div>
  );
}

function App() {
  const text = "Переданный пропсом техт-константа";
  return (
    <div>
      <Message text={text} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
