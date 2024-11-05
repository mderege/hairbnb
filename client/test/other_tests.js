import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';

describe('Header Component', () => {
    it('renders the header with logo and navigation', () => {
      render(<Header />);
      const logo = screen.getByAltText(/Company Logo/i); // Adjust based on the alt text of the logo
      expect(logo).toBeInTheDocument();
  
      const navLink = screen.getByRole('link', { name: /Home/i }); // Adjust based on your actual links
      expect(navLink).toBeInTheDocument();
    });
  });

describe('About Component', () => {
  it('renders the about information', () => {
    render(<About />);
    const aboutText = screen.getByText(/About Us/i); // Adjust this to match the actual text
    expect(aboutText).toBeInTheDocument();
  });
});

describe('Contact Component', () => {
    it('renders contact form', () => {
      render(<Contact />);
      const contactForm = screen.getByRole('form');
      expect(contactForm).toBeInTheDocument();
    });
  
    it('submits the form with entered data', () => {
      render(<Contact />);
      const nameInput = screen.getByLabelText(/Name/i);
      const submitButton = screen.getByRole('button', { name: /Submit/i });
      
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.click(submitButton);
  
      // Test form submission logic
    });
  });

  describe('Footer Component', () => {
    it('renders footer content', () => {
      render(<Footer />);
      const footerText = screen.getByText(/© 2024 Company Name/i); // Adjust the text
      expect(footerText).toBeInTheDocument();
    });
  });

  describe('HeroSection Component', () => {
    it('renders hero section with heading and call-to-action', () => {
      render(<HeroSection />);
      const heading = screen.getByRole('heading', { name: /Welcome to Our Service/i }); // Adjust the text
      expect(heading).toBeInTheDocument();
  
      const callToAction = screen.getByRole('button', { name: /Get Started/i }); // Adjust based on button text
      expect(callToAction).toBeInTheDocument();
    });
  });