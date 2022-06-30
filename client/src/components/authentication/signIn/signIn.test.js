import React from "react";
import SignIn from "./signIn";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

afterEach(cleanup);

describe("Sign In", () => {
  it("renders a form to log a user in", () => {
    render(<SignIn />);

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

    const submitEl = screen.getByRole("button", { name: "Log In" });
    expect(submitEl).toBeInTheDocument();
  });

  it("welcomes user after login", () => {
    const fakeUser = {
      username: "bob@bob.com"
    }
    render(<SignIn user={fakeUser}/>);

    expect(screen.getByText("Welcome bob@bob.com!")).toBeInTheDocument();
  });
});
