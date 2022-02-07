import { List, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Chat } from "./chat";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  createConversation,
  deleteConversation,
} from "../../store/conversations";
import { useCallback } from "react";
import { conversationsSelector } from "../../store/conversations";

export const ChatList = () => {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const conversations = useSelector(conversationsSelector);

  const addChat = () => {
    const chatName = prompt("Введите название чата");
    const isValidName = !conversations.includes(chatName);

    if (chatName && isValidName) {
      dispatch(createConversation(chatName));
    } else {
      alert("Введите другое название чата");
    }
  };

  const deleteChat = useCallback(
    (conversation) => {
      dispatch(deleteConversation(conversation));
      setTimeout(() => navigate("/chat"), 500);
    },
    [dispatch, navigate]
  );

  return (
    <List component="nav">
      {conversations.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat
            title={chat}
            selected={roomId === chat}
            handleDelChat={deleteChat}
          />
        </Link>
      ))}
      <Button onClick={addChat}>Add Chat</Button>
    </List>
  );
};
