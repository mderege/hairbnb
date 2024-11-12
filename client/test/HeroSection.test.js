// HeroSection.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeroSection from 'client/src/components/HeroSection';

describe('HeroSection Component', () => {
  test('renders without crashing', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Hairbnb/i)).toBeInTheDocument();
  });

  test('displays main heading and description', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Hairbnb/i)).toBeInTheDocument();
    expect(screen.getByText(/Helping you get the haircut or stylist you want/i)).toBeInTheDocument();
  });

  test('displays background image', () => {
    render(<HeroSection />);
    const imgElement = screen.getByRole('presentation', { hidden: true });
    expect(imgElement).toHaveAttribute('src', 'assets/img/hero-bg.jpg');
    expect(imgElement).toHaveAttribute('alt', '');
  });
});
