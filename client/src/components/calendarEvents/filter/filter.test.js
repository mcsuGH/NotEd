import React from "react";
import Filter from "./filter";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Filter", () => {
  it("has a checkbox for each label", () => {
    render(<Filter monthIndex={5}/>);
    const prevMonth = screen.getByRole("button", { name: "«" });
    expect(prevMonth).toBeInTheDocument();
    const nextMonth = screen.getByRole("button", { name: "»" });
    expect(nextMonth).toBeInTheDocument();
    expect(screen.getByText("June 2022")).toBeInTheDocument();
    const generalCheckbox = screen.getByRole("checkbox", { name: "General" });
    expect(generalCheckbox).toBeInTheDocument();
    const personalCheckbox = screen.getByRole("checkbox", { name: "Personal" });
    expect(personalCheckbox).toBeInTheDocument();
    const familyCheckbox = screen.getByRole("checkbox", { name: "Family & Friends" });
    expect(familyCheckbox).toBeInTheDocument();
    const birthdayCheckbox = screen.getByRole("checkbox", { name: "Birthdays" });
    expect(birthdayCheckbox).toBeInTheDocument();
    const holidaysCheckbox = screen.getByRole("checkbox", { name: "Holidays" });
    expect(holidaysCheckbox).toBeInTheDocument();
  });
});
