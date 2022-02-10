import React, { useState, useEffect, useRef, useCallback } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./use-styles";
import { Message } from "./message";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  messagesSelectorByRoomId,
  sendMessageWithBot,
} from "../../store/messages";

export const MessageList = () => {
  const styles = useStyles();
  const { roomId } = useParams();
  const messages = useSelector(messagesSelectorByRoomId(roomId));
  const [message, setMessage] = useState("");
  const ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(
          sendMessageWithBot(roomId, { author: author || "Bot", message })
        );

        setMessage("");
      } else {
        alert("Введите сообщение");
      }
    },
    [dispatch, roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(message);
    }
  };

  return (
    <div>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message key={index} message={message} roomId={roomId} />
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
                onClick={() => send(message)}
              ></Send>
            </InputAdornment>
          )
        }
      />
    </div>
  );
};
