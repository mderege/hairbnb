// Navbar.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Navbar from 'client/src/components/Navbar';

describe('Navbar Component', () => {
  const renderComponent = (initialEntries = ['/']) =>
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/landing" element={<div>Landing Page</div>} />
          <Route path="/create" element={<div>Create Page</div>} />
          <Route path="/ProfilePage" element={<div>Profile Page</div>} />
        </Routes>
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

  test('applies active class to Home link when on /landing', () => {
    renderComponent(['/landing']);
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toHaveClass('text-pink-500 font-bold');
  });

  test('applies active class to Stylists link when on /', () => {
    renderComponent(['/']);
    const stylistsLink = screen.getByText(/Stylists/i);
    expect(stylistsLink).toHaveClass('text-pink-500 font-bold');
  });

  test('applies default class to non-active links', () => {
    renderComponent(['/']);
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toHaveClass('text-gray-600 hover:text-pink-500 font-semibold');
  });
});
