import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import GoogleLogin from './GoogleLogin';

describe('GoogleLogin Component', () => {
  it('renders Google login button', () => {
    render(<GoogleLogin />);
    const loginButton = screen.getByRole('button', { name: /Login with Google/i });
    expect(loginButton).toBeInTheDocument();
  });

  it('calls the login function when button is clicked', () => {
    const mockLoginFunction = jest.fn();
    render(<GoogleLogin onClick={mockLoginFunction} />);
    const loginButton = screen.getByRole('button', { name: /Login with Google/i });
    fireEvent.click(loginButton);
    expect(mockLoginFunction).toHaveBeenCalledTimes(1);
  });
});
