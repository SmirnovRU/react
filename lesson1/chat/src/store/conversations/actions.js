import {
  CREATE_CONVERSATION,
  DELETE_CONVERSATION,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
} from "./types";

export const createConversation = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const deleteConversation = (conversation) => ({
  type: DELETE_CONVERSATION,
  payload: conversation,
});

export const getConversationsStart = () => ({
  type: GET_CONVERSATIONS_START,
});

export const getConversationsSuccess = (conversation) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: conversation,
});

export const getConversationsError = (error) => ({
  type: GET_CONVERSATIONS_ERROR,
  payload: error,
});
