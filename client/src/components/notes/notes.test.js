import React from "react";
import Notes from "./notes";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Notes", () => {
  it("Renders a form to create notes and displays notes", () => {
    render(<Notes />)
    const titleEl = screen.getByLabelText("title");
    expect(titleEl.value).toBe("");
    expect(titleEl.placeholder).toBe("Title");
    expect(screen.getByText("You have no notes")).toBeInTheDocument();
  })
})