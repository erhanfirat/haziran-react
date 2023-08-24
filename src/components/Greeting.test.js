import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import PageDefault from "../pages/PageDefault";

test("renders greeting on Greeting component", async () => {
  // Arrange
  render(<Greeting userName="ali" surname="taş" />);
  // Act
  const greeting = screen.getByText("Sayfama hoşgeldiniz ali taş!...");
  // Assert
  expect(greeting).toBeInTheDocument();
});

test("renders greeting on Greeting component", async () => {
  // Arrange
  render(<Greeting userName="ali" surname="taş" />);
  // Act
  const greeting = screen.getByText("Sayfama hoşgeldiniz ali taş!...");
  // Assert
  expect(greeting).toHaveAttribute("id", "greeting-header");
  expect(greeting).toHaveClass("p-2", "my-2", "border-2");
  screen.debug();
});
