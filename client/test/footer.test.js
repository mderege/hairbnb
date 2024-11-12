// Footer.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from 'client/src/components/Footer';

describe('Footer Component', () => {
  test('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByText(/Hairbnb/i)).toBeInTheDocument();
  });

  test('displays the site description', () => {
    render(<Footer />);
    expect(screen.getByText(/Cras fermentum odio eu feugiat/i)).toBeInTheDocument();
  });
});
