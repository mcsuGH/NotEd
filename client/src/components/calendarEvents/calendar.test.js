import React from 'react';
import Calendar from './calendar';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe("Calendar", () => {
  it("renders each component of the calendar", () => {
    const fakeUser = {
      id: "123",
    }
    render(<Calendar user={fakeUser}/>)
    
    expect(screen.getByRole("button", { name: "«" })).toBeInTheDocument();
    expect(screen.getByText("General")).toBeInTheDocument();
    expect(screen.getByText("MON")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
  })
})