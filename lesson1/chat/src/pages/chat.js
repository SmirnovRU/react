import { Routes, Route } from "react-router-dom";
import { MessageList, ChatList, Layout } from "../components";

export const ChatPage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout chats={<ChatList />} messages={<h1>Выберите чат</h1>} />
        }
      />
      <Route
        path=":roomId"
        element={<Layout chats={<ChatList />} messages={<MessageList />} />}
      />
    </Routes>
  );
};
