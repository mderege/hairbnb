// About.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from 'client/src/components/About';

describe('About Component', () => {
  test('renders without crashing', () => {
    render(<About />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  test('displays main headings and description', () => {
    render(<About />);
    expect(screen.getByText(/We're like Airbnb, but for hairdressers/i)).toBeInTheDocument();
    expect(screen.getByText(/You deserve the haircut or style you want/i)).toBeInTheDocument();
  });

  test('displays icon boxes with correct headings', () => {
    render(<About />);
    expect(screen.getByText(/Free to use/i)).toBeInTheDocument();
    expect(screen.getByText(/Simple browsing/i)).toBeInTheDocument();
    expect(screen.getByText(/Direct management/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  test('displays link to browse stylists', () => {
    render(<About />);
    const link = screen.getByText(/Browse stylists in your area/i);
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '#');
  });
});