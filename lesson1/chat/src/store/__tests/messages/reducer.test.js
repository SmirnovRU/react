import { messagesReducer, sendMessage, deleteMessage } from "../../messages";

describe("message reducer", () => {
  describe("get messages type", () => {});
  describe("other types", () => {
    it("send message", () => {});

    const MESSAGE = { author: "User", message: "test" };

    const state = messagesReducer(
      { messages: {} },
      sendMessage("room1", MESSAGE)
    );

    expect(state.messages.room1).toBeDefined();
    expect(state.messages.room1.length).toBe(1);
    expect(state.messages.room1[0].author).toBe(MESSAGE.author);
    expect(state.messages.room1[0].message).toBe(MESSAGE.message);
    console.log("state", state);

    it("delete message by id", () => {
      const state = messagesReducer(
        {
          messages: {
            room1: [{ id: 1 }],
          },
        },
        deleteMessage("room1", 1)
      );

      expect(state.messages.room1.length).toBe(0);
    });
  });
});
