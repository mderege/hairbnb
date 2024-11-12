// Navbar.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from 'client/src/components/Navbar';

describe('Navbar Component', () => {
  const renderComponent = () =>
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

  test('renders without crashing', () => {
    renderComponent();
    expect(screen.getByAltText(/HairBnB logo/i)).toBeInTheDocument();
    expect(screen.getByText(/HairBnB/i)).toBeInTheDocument();
  });

  test('displays navigation links', () => {
    renderComponent();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Stylists/i)).toBeInTheDocument();
  });

  test('displays My Profile button with correct styling', () => {
    renderComponent();
    const profileButton = screen.getByText(/My Profile/i);
    expect(profileButton).toBeInTheDocument();
    expect(profileButton).toHaveClass('bg-pink-500 text-white');
  });

  test('displays Get Started button with correct link', () => {
    renderComponent();
    const getStartedButton = screen.getByText(/Get Started/i);
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton.closest('a')).toHaveAttribute('href', '/create');
  });
});