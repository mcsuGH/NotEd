import React from "react";
import ShowEvent from "./showEvent";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("ShowEvent", () => {
  it("shows the details of an event", () => {
    const fakeEvent = {
      title: "hi", 
      description: "bye", 
      date: "2022-06-23", 
      label: "indigo" ,
    };
    render(
      <ShowEvent event={fakeEvent} />
    );
    expect(screen.getByText("hi")).toBeInTheDocument();
    expect(screen.getByText("bye")).toBeInTheDocument();
    expect(screen.getByText("Thursday, June 23 2022")).toBeInTheDocument();
    expect(screen.getByText("General")).toBeInTheDocument();
  });
});
