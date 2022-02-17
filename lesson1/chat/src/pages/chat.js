import { Routes, Route } from "react-router-dom";
import { MessageList, ChatList, Layout } from "../components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getConversationsFB } from "../store/conversations/thunks";

export const ChatPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversationsFB());
  }, [dispatch]);

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
