// Contact.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Contact from 'client/src/components/Contact';

describe('Contact Component', () => {
  test('renders without crashing', () => {
    render(<Contact />);
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  test('displays contact information', () => {
    render(<Contact />);
    expect(screen.getByText(/A108 Adam Street/i)).toBeInTheDocument();
    expect(screen.getByText(/New York, NY 535022/i)).toBeInTheDocument();
  });

  test('displays form with input fields', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument();
  });

  test('displays submission button and messages', () => {
    render(<Contact />);
    expect(screen.getByText(/Send Message/i)).toBeInTheDocument();
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(screen.getByText(/Your message has been sent. Thank you!/i)).toBeInTheDocument();
  });
});