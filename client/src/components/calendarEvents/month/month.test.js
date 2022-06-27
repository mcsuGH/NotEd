import React from "react";
import Month from "./month";
import dayjs from "dayjs";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Month", () => {
  it("renders the days of the month", () => {
    render(
      <Month
        month={[
          [
            new dayjs("2022-05-30"),
            new dayjs("2022-05-31"),
            new dayjs("2022-06-01"),
            new dayjs("2022-06-02"),
            new dayjs("2022-06-03"),
            new dayjs("2022-06-04"),
            new dayjs("2022-06-05"),
          ],
        ]}
        events={[
          {title: "hi", description: "bye", date: "2022-06-01", label: "red"}
        ]}
      />
    );
    expect(screen.getByText("hi")).toBeInTheDocument();
    expect(screen.getByText("MON")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("TUE")).toBeInTheDocument();
    expect(screen.getByText("31")).toBeInTheDocument();
    expect(screen.getByText("WED")).toBeInTheDocument();
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("THU")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("FRI")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("SAT")).toBeInTheDocument();
    expect(screen.getByText("04")).toBeInTheDocument();
    expect(screen.getByText("SUN")).toBeInTheDocument();
    expect(screen.getByText("05")).toBeInTheDocument();
  });
});
