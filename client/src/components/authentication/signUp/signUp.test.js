import React from "react";
import SignUp from "./signUp";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

afterEach(cleanup);

describe("Sign Up", () => {
  it("renders a form to register a user", () => {
    render(<SignUp />);

    const emailEl = screen.getByLabelText("email");
    expect(emailEl.value).toBe("");
    expect(emailEl.placeholder).toBe("Email");
    fireEvent.change(emailEl, { target: { value: "Test" }});
    expect(emailEl.value).toBe("Test");

    const passwordEl = screen.getByLabelText("password");
    expect(passwordEl.value).toBe("");
    expect(passwordEl.placeholder).toBe("Password");
    fireEvent.change(passwordEl, { target: { value: "Test" }});
    expect(passwordEl.value).toBe("Test");

    const submitEl = screen.getByRole("button", { name: "Submit" });
    expect(submitEl).toBeInTheDocument();
  });
});
