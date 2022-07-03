import React from "react";
import OldNotes from "./oldNotes";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Old Notes", () => {
  it("Displays the old notes with the title and description", () => {
    const hiddenFromApi = [
        {title: "hi", description: "bye", createdAt: new Date(2022, 5, 13), hidden: true},
    ];
    render(<OldNotes hidden={hiddenFromApi}/>)
    expect(screen.getByText("hi")).toBeInTheDocument();
    expect(screen.getByText("bye")).toBeInTheDocument();
  })

})