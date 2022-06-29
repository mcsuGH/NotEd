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

    const submitEl = screen.getByRole("button", { name: "Create" });
    expect(submitEl).toBeInTheDocument();
  });

  it("cannot create a new note if there is already ten notes", () => {
    render(<CreateNotes notes={[0,1,2,3,4,5,6,7,8,9]}/>);

    fireEvent.click(screen.getByRole("button", { name: "Create" }));
    expect(screen.getByText("You can only have 10 notes at a time")).toBeInTheDocument();
  });
});
