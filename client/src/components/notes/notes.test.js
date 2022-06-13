import React from "react";
import Notes from "./notes";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Notes", () => {
  it("Displays the notes with the title, description and date", () => {
    const notesFromApi = [
        {title: "hi", description: "bye", date: "13/06/22"},
    ];
    render(<Notes notes={notesFromApi}/>)
    expect(screen.getByText("hi")).toBeInTheDocument();
    expect(screen.getByText("bye")).toBeInTheDocument();
    expect(screen.getByText("13/06/22")).toBeInTheDocument();
  })
})