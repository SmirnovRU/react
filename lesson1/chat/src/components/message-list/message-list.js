import React, { useState, useEffect, useRef, useCallback } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./use-styles";
import { Message } from "./message";
import { useParams } from "react-router-dom";

export const MessageList = () => {
  const styles = useStyles();
  const { roomId } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({
    room1: [
      { author: "User", message: "Hello from User" },
      { author: "Bot", message: "Hello from Bot" },
    ],
  });
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const sendMessage = useCallback(
    (message, author = "User") => {
      if (message) {
        setMessages({
          ...messages,
          [roomId]: [...(messages[roomId] ?? []), { author, message }],
        });

        setMessage("");
      } else {
        alert("Введите сообщение");
      }
    },
    [roomId, messages]
  );

  useEffect(() => {
    const messagessObj = messages[roomId] ?? [];
    const lastMessage = messagessObj[messagessObj.length - 1];
    if (messagessObj.length && lastMessage.author === "User") {
      setTimeout(() => {
        sendMessage("Hello from Bot", "Bot");
      }, 500);
    }
  }, [messages, roomId, sendMessage]);

  const messagessObj = messages[roomId] ?? [];

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage(message);
    }
  };

  return (
    <div>
      <div ref={ref}>
        {messagessObj.map((message, index) => (
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
              <Send
                className={styles.icon}
                onClick={() => sendMessage(message)}
              ></Send>
            </InputAdornment>
          )
        }
      />
    </div>
  );
};
