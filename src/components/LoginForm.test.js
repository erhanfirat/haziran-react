import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

test("Login Form Email Input Test 1", async () => {
  render(<LoginForm />);

  const emailInput = screen.getByTestId("email-input");

  expect(emailInput).not.toBeInvalid();
});

test("Login Form Email Input Test 2", async () => {
  render(<LoginForm />);

  const emailInput = screen.getByTestId("email-input");

  await userEvent.type(emailInput, "werwe");

  expect(emailInput).toBeInvalid();
});

test("Login Form Email Input Test 3", async () => {
  render(<LoginForm />);

  const emailInput = screen.getByTestId("email-input");

  await userEvent.type(emailInput, "asd@asd.com");

  expect(emailInput).not.toBeInvalid();
});

test("Login Form Email Input Test 4", async () => {
  render(<LoginForm />);

  const emailInput = screen.getByTestId("email-input");

  await userEvent.type(emailInput, "asd@asd.com");

  expect(emailInput).toHaveValue("asd@asd.com");
});

