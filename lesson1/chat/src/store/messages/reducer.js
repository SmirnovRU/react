import { nanoid } from "nanoid";
import { SEND_MESSAGE, DELETE_MESSAGE_BY_ID } from "./types";

const initialState = {
  messages: {
    room1: [
      {
        author: "User",
        message: "Hello from User",
        date: new Date(),
        id: nanoid(),
      },
      {
        author: "Bot",
        message: "Hello from Bot",
        date: new Date(),
        id: nanoid(),
      },
    ],
  },
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            { ...action.payload.message, id: nanoid(), date: new Date() },
          ],
        },
      };
    case DELETE_MESSAGE_BY_ID:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };
    default:
      return state;
  }
};
