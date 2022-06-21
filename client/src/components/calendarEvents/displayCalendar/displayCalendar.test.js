import React from 'react';
import DisplayCalendar from './displayCalendar';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe("DisplayCalendar", () => {
  it("renders each component of the calendar", () => {
    render(<DisplayCalendar />)
    expect(screen.getByText("Create Event:")).toBeInTheDocument();
  })
})