import { render, screen } from "@testing-library/react";
import { List } from ".";

const requiredProps = {
  items: [
    {
      text: "Example",
      icon: {
        title: "Test icon 1",
        url: "https://example.com/1",
      },
    },
    {
      text: "Example 2",
      icon: {
        title: "Test icon 2",
        url: "https://example.com/2",
      },
    },
  ],
};

describe("List", () => {
  it("renders a unordered list of list items", () => {
    render(<List {...requiredProps} />);

    expect(screen.getByRole("list")).toBeVisible();
    expect(screen.getAllByRole("listitem")).toHaveLength(
      requiredProps.items.length,
    );
  });
});
