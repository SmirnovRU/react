import React, { useState, useEffect, useRef } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./use-styles";
import { Message } from "./message";

export const MessageList = () => {
  const styles = useStyles();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

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

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

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
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <Input
        className={styles.input}
        fullWidth
        onChange={(event) => setMessage(event.target.value)}
        placeholder="enter message..."
        value={message}
        onKeyPress={handlePressInput}
        endAdornment={
          message && (
            <InputAdornment position="end">
              <Send className={styles.icon} onClick={sendMessage}></Send>
            </InputAdornment>
          )
        }
      />
    </div>
  );
};
