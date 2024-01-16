import { render, screen } from "@testing-library/react";
import { IconLink } from ".";

const requiredProps = {
  iconUrl: "example.png",
  href: "https://example.com",
  text: "Click me",
};

describe("IconLink", () => {
  it("renders a link with the text and icon", () => {
    render(<IconLink {...requiredProps} />);

    expect(
      screen.getByRole("link", { name: requiredProps.text }),
    ).toBeVisible();
    expect(screen.getByRole("img", { name: "" })).toBeVisible();
  });

  it("labels the icon if iconLabel is passed", () => {
    const iconLabel = "Icon";
    render(<IconLink {...requiredProps} iconLabel={iconLabel} />);

    expect(screen.getByRole("img", { name: iconLabel })).toBeVisible();
  });

  it("opens the link in a new tab if isNewTab is true", () => {
    const { rerender } = render(<IconLink {...requiredProps} />);
    expect(screen.getByRole("link")).not.toHaveAttribute("target", "_blank");

    rerender(<IconLink {...requiredProps} isNewTab />);
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });
});
