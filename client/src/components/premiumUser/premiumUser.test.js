import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import PremiumUser from './premiumUser';

afterEach(cleanup);

describe('PremiumUser', () => {
  it("renders a button which takes you to a page to pay for upgrade", () => {
    const fakeUser = {
      premium: false
    }
    render(<PremiumUser user={fakeUser} />);

    const payEl = screen.getByRole("button", { name: "Pay" });
    expect(payEl).toBeInTheDocument();
  })

  it("thanks the user if already premium", () => {
    const fakeUser = {
      premium: true
    }
    render(<PremiumUser user={fakeUser} />);
    expect(screen.getByText("Thanks for the support!")).toBeInTheDocument();
  })
})
