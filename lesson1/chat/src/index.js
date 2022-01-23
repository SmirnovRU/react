import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const MessageList = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (lastMessage?.author !== "Bot" && messages.length) {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          { author: "Bot", message: "Hello from Bot" },
        ]);
      }, 500);
    }
    return () => clearInterval(timerId);
  }, [messages]);

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, { author: "User", message }]);
      setMessage("");
    } else {
      alert("Введите сообщение");
    }
  };

  return (
    <div>
      <h1>MessageList</h1>
      <input
        onChange={(event) => setMessage(event.target.value)}
        placeholder="enter message..."
        value={message}
      />
      <button onClick={sendMessage}>send</button>
      <hr />
      {messages.map((message) => (
        <div>
          <h2>{message.author}</h2>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div>
      <MessageList />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
