// Header.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from 'client/src/components/Header';

describe('Header Component', () => {
  test('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByText(/Hairbnb/i)).toBeInTheDocument();
  });

  test('displays logo and navigation links', () => {
    render(<Header />);
    expect(screen.getByAltText('')).toBeInTheDocument(); // Logo image alt text
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Team/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  test('displays Get Started button', () => {
    render(<Header />);
    const getStartedButton = screen.getByText(/Get Started/i);
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton.closest('a')).toHaveAttribute('href', '#about');
  });
});
