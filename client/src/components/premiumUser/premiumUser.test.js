import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import PremiumUser from './premiumUser';

afterEach(cleanup);

describe('PremiumUser', () => {
  it("renders a button which takes you to a page to pay for upgrade", () => {
    render(<PremiumUser />);

    const premiumEl = screen.getByRole("button", { name: "Premium" });
    expect(premiumEl).toBeInTheDocument();
  })
})
