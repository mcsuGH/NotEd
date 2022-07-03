import React from "react";
import Notes from "./notes";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Notes", () => {
  it("Renders a form to create notes, displays notes and has a old notes button if premium user", () => {
    const fakeUser = {
      id: "123",
      premium: true,
    }

    render(<Notes user={fakeUser}/>)
    const titleEl = screen.getByLabelText("title");
    expect(titleEl.value).toBe("");
    expect(titleEl.placeholder).toBe("Title");
    expect(screen.getByText("You have no notes")).toBeInTheDocument();
    const oldNotesEl = screen.getByRole("button", {name: "Old Notes"});
    expect(oldNotesEl).toBeInTheDocument();
  })

  it("Renders a form to create notes and displays notes when not premium user", () => {
    const fakeUser = {
      id: "123",
      premium: false,
    }

    render(<Notes user={fakeUser}/>)
    const titleEl = screen.getByLabelText("title");
    expect(titleEl.value).toBe("");
    expect(titleEl.placeholder).toBe("Title");
    expect(screen.getByText("You have no notes")).toBeInTheDocument();
    const oldNotesEl = screen.queryByRole("button", {name: "Old Notes"});
    expect(oldNotesEl).not.toBeInTheDocument();
  })
})