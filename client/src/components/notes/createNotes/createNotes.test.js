import React from "react";
import CreateNotes from "./createNotes";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

afterEach(cleanup);

describe("Create Notes", () => {
  it("renders a form to create an event", () => {
    render(<CreateNotes />);

    const titleEl = screen.getByLabelText("title");
    expect(titleEl.value).toBe("");
    expect(titleEl.placeholder).toBe("Title");
    fireEvent.change(titleEl, { target: { value: "Test" }});
    expect(titleEl.value).toBe("Test");

    const descriptionEl = screen.getByLabelText("description");
    expect(descriptionEl.value).toBe("");
    expect(descriptionEl.placeholder).toBe("Description");
    fireEvent.change(descriptionEl, { target: { value: "Test" }});
    expect(descriptionEl.value).toBe("Test");

    const submitEl = screen.getByRole("button", { name: "Submit" });
    expect(submitEl).toBeInTheDocument();
  });
});
