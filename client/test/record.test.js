// record.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Record from 'client/src/components/Record.jsx';

global.fetch = jest.fn();

describe('Record Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    fetch.mockClear();
    mockNavigate.mockClear();
  });

  const renderComponent = () =>
    render(
      <Router>
        <Record navigate={mockNavigate} />
      </Router>
    );

  test('renders without crashing', () => {
    renderComponent();
    expect(screen.getByText(/Create Profile/i)).toBeInTheDocument();
  });

  test('handles input changes correctly', () => {
    renderComponent();
    const nameInput = screen.getByLabelText(/Full Name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');

    const emailInput = screen.getByLabelText(/Email Address/i);
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput.value).toBe('john@example.com');
  });

  test('adds and removes availability slots', () => {
    // Set level to "Stylist" to ensure that "Stylist Availabilities" field is rendered
    renderComponent();
    screen.getByLabelText(/Role/i).value = "Stylist";
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: "Stylist" } });
  
    const dateTimeInput = screen.getByLabelText(/Stylist Availabilities/i);
    const addButton = screen.getByText(/Add Slot/i);
  
    fireEvent.change(dateTimeInput, { target: { value: '2024-12-12T10:00' } });
    fireEvent.click(addButton);
    expect(screen.getByText(/12\/12\/2024/i)).toBeInTheDocument();
  
    const removeButton = screen.getByText(/Remove/i);
    fireEvent.click(removeButton);
    expect(screen.queryByText(/12\/12\/2024/i)).not.toBeInTheDocument();
  });
  

  test('adds and removes hairstyles', () => {
    renderComponent();
  
    // Simulate selecting "Stylist" role to render the stylist section
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: "Stylist" } });
  
    // Confirm inputs are available after changing the role
    const nameInput = screen.getByPlaceholderText(/Style Name/i);
    const timeInput = screen.getByPlaceholderText(/Time \(mins\)/i);
    const priceInput = screen.getByPlaceholderText(/Price \(\$\)/i);
    const addButton = screen.getByText(/Add Hairstyle/i);
  
    // Add and check hairstyle
    fireEvent.change(nameInput, { target: { value: 'Curly Cut' } });
    fireEvent.change(timeInput, { target: { value: '45' } });
    fireEvent.change(priceInput, { target: { value: '50' } });
    fireEvent.click(addButton);
    expect(screen.getByText(/Curly Cut/i)).toBeInTheDocument();
  
    // Remove hairstyle
    const removeButton = screen.getByText(/Remove/i);
    fireEvent.click(removeButton);
    expect(screen.queryByText(/Curly Cut/i)).not.toBeInTheDocument();
  });  
  
  test('fetches and displays data for editing', async () => {
    // Mocking fetch to return specific data
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        name: "",
        email: 'existing@example.com',
        level: 'Stylist',
        stylistAvailabilities: ['2024-12-12T10:00'],
        stylistHairstylesOffered: [{ name: 'Cut', time: 30, price: 25 }]
      })
    });
  
    renderComponent();
  
    // Use `waitFor` to verify input values
    await waitFor(() => {
      expect(screen.getByLabelText(/Full Name/i)).toHaveDisplayValue("");
      expect(screen.getByLabelText(/Email Address/i)).toHaveDisplayValue("");
    });
  });
})