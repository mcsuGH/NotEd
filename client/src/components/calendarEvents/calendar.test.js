import React from 'react';
import Calendar from './calendar';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe("Calendar", () => {
  it("renders each component of the calendar", () => {
    render(<Calendar />)
    
    
  })
})