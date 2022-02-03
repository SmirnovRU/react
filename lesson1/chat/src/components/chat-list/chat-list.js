import { List, Button } from "@mui/material";
import { useState } from "react";
import { Chat } from "./chat";
import { Link, useParams, useNavigate } from "react-router-dom";

export const ChatList = () => {
  const [chats, setChats] = useState(["room1", "room2", "room3"]);
  const { roomId } = useParams();
  const navigate = useNavigate();

  const addChat = () => {
    const chatName = prompt("Введите название чата");
    setChats([...chats, chatName]);
  };

  const deleteChat = () => {
    setChats(chats.filter((chat) => chat !== roomId));
    navigate(-1);
  };

  return (
    <List component="nav">
      {chats.map((chat) => (
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
