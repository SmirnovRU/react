import { db } from "./firebase";

export const getConversationsApi = () => {
  return db.ref("conversations").get();
};

export const createConversationsApi = (roomId) => {
  return db
    .ref("conversations")
    .child(roomId)
    .set({ title: roomId, value: "" });
};
