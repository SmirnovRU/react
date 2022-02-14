import { createStore, combineReducers, applyMiddleware } from "redux";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { profileReducer } from "./profile";
import { thunk } from "./middlewares";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
  }),
  applyMiddleware(thunk)
);
