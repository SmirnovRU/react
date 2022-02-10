import { sendMessage } from ".";

export const sendMessageWithBot = (roomId, message) => (dispatch, getState) => {
  dispatch(sendMessage(roomId, message));
  if (message.author == "User") {
    setTimeout(() => {
      dispatch(
        sendMessage(roomId, {
          author: "Bot",
          message: "Hello from Bot",
        })
      );
    }, 500);
  }
};
