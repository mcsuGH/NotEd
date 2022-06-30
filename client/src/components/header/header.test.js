import React from 'react';
import Header from './header';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe("Header", () => {
  it("has links to each page when not logged in", () => {
    render(<Header />);

    const loginLink = screen.getByRole("link", { name: "Login" });
    expect(loginLink.getAttribute("href")).toBe("/");

    const registerLink = screen.getByRole("link", { name: "Register" });
    expect(registerLink.getAttribute("href")).toBe("/register");

    const notesLink = screen.getByRole("link", { name: "Notes" });
    expect(notesLink.getAttribute("href")).toBe("/notes");

    const calendarLink = screen.getByRole("link", { name: "Calendar" });
    expect(calendarLink.getAttribute("href")).toBe("/calendar");
 
    const aboutLink = screen.getByRole("link", { name: "About Us" });
    expect(aboutLink.getAttribute("href")).toBe("https://github.com/mcsuGH/NotEd");
  })
})