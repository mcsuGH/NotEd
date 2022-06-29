import React from "react";
import DisplayNotes from "./displayNotes";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Display Notes", () => {
  it("Displays the notes with the title, description and date", () => {
    const notesFromApi = [
        {title: "hi", description: "bye", createdAt: new Date(2022, 5, 13)},
    ];
    render(<DisplayNotes notes={notesFromApi}/>)
    expect(screen.getByText("hi")).toBeInTheDocument();
    expect(screen.getByText("bye")).toBeInTheDocument();
    expect(screen.getByText("Monday, June 13 2022")).toBeInTheDocument();
  })

  it("when there are no notes, it says there are no notes", () => {
    render(<DisplayNotes notes={[]}/>)
    expect(screen.getByText("You have no notes")).toBeInTheDocument();
  })
})