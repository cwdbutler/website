import { render, screen } from "@testing-library/react";
import { ListItem } from ".";

const requiredProps = {
  text: "Example",
  icon: {
    title: "Test icon 1",
    url: "https://example.com/1",
  },
};

describe("List", () => {
  it("renders a list item with the icon and text", () => {
    render(<ListItem {...requiredProps} />);

    // the list item itself doesn't have a label as this provides inconsistent results
    expect(screen.getByRole("listitem")).toHaveTextContent(requiredProps.text);
    expect(screen.getByText(requiredProps.text)).toBeVisible();
    expect(
      screen.getByRole("img", { name: requiredProps.icon.title }),
    ).toBeVisible();
  });
});
