import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("should sum correctly", () => {
    const sum = (x: number, y: number) => x + y;
    expect(sum(4, 4)).toBe(8);
  });

  test("should render app with hello message", () => {
    render(<App />);
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });

  test("should change message on button click", () => {
    render(<App />);
    expect(
      screen.getByText("Let´s learn more about testing in React")
    ).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /Change message/i });
    fireEvent.click(button);

    expect(screen.getByText("New massage!")).toBeInTheDocument();
  });
});
