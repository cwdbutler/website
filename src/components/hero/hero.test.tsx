import { render, screen } from "@testing-library/react";
import Hero from "./hero";

const requiredProps = {
  title: "Hi",
  subtitle: "Bye",
};

describe("Hero", () => {
  it("renders a title as a <h1> tag", () => {
    render(<Hero {...requiredProps} />);
    expect(
      screen.getByRole("heading", { level: 1, name: requiredProps.title })
    ).toBeVisible();
  });

  it("renders a subtitle as a <p> tag", () => {
    render(<Hero {...requiredProps} />);
    expect(screen.getByText(requiredProps.subtitle)).toBeVisible();
  });
});
