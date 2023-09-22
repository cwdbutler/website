import { render, screen } from "@testing-library/react";
import Hero from ".";

const link1 = {
  iconUrl: "example.png",
  href: "https://example.com",
  text: "Click me",
};

const link2 = {
  iconUrl: "another-example.png",
  href: "https://another-example.com",
  text: "No click me",
};
const requiredProps = {
  title: "Hi",
  subtitle: "Bye",
  links: [link1, link2],
};

describe("Hero", () => {
  it("renders a title and subtitle", () => {
    render(<Hero {...requiredProps} />);

    expect(
      screen.getByRole("heading", { level: 1, name: requiredProps.title })
    ).toBeVisible();
    expect(screen.getByText(requiredProps.subtitle)).toBeVisible();
  });

  it("renders each link", () => {
    render(<Hero {...requiredProps} />);

    expect(screen.getByRole("link", { name: link1.text })).toBeVisible();
    expect(screen.getByRole("link", { name: link2.text })).toBeVisible();
  });
});
