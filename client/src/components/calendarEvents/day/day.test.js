import React from "react";
import Day from "./day";
import dayjs from "dayjs";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Day", () => {
  it("renders the events for the date", () => {
    const fakeDay = new dayjs("2022-06-22");
    const fakeData = [
      { title: "hi", description: "bye", date: "22-06-22", label: "indigo" },
    ];
    render(
      <Day day={fakeDay} key="1" rowIdx="1" data={fakeData} />
    );
    expect(screen.getByText("hi")).toBeInTheDocument();
  });
});
