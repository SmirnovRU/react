import { renderWithRedux } from "../../../utils/render-with-redux";
import { Chat } from "./chat";

describe("Chat component", () => {
  it("should render Chat with title prop", () => {
    const TITLE = "test";

    const { container } = renderWithRedux(<Chat title={TITLE} />, {});

    const nodes = [...container.querySelectorAll(".text")];

    expect(nodes[0]).toHaveTextContent(TITLE);
    expect(nodes[1]).toHaveTextContent("12.30");
  });

  it("should render Chat with selected prop", () => {
    const TITLE = "room1";

    const { container, getByTestId } = renderWithRedux(
      <Chat title={TITLE} selected={true} />,
      {}
    );
    console.log("container", container);

    // expect(container.querySelector("test")).toHaveClass("Mui-selected");
    // expect(getByRole("button")).toHaveClass("Mui-selected");
    expect(getByTestId("wrapper")).toHaveClass("Mui-selected");
  });
});
