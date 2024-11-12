// record.test.js

import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Record from 'client/src/components/Record.jsx';

global.fetch = jest.fn();
global.alert = jest.fn();

describe('Record Component', () => {
  const mockNavigate = jest.fn();
  const originalError = console.error;

  beforeEach(() => {
    fetch.mockClear();
    mockNavigate.mockClear();
    global.alert.mockClear();
    console.error = jest.fn(); // mock console.error
  });

  afterEach(() => {
    console.error = originalError; // restore console.error
  });

  const renderComponent = () =>
    render(
      <Router>
        <Record navigate={mockNavigate} />
      </Router>
    );

  // Existing tests
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
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: "Stylist" } });

    const nameInput = screen.getByPlaceholderText(/Style Name/i);
    const timeInput = screen.getByPlaceholderText(/Time \(mins\)/i);
    const priceInput = screen.getByPlaceholderText(/Price \(\$\)/i);
    const addButton = screen.getByText(/Add Hairstyle/i);

    fireEvent.change(nameInput, { target: { value: 'Curly Cut' } });
    fireEvent.change(timeInput, { target: { value: '45' } });
    fireEvent.change(priceInput, { target: { value: '50' } });
    fireEvent.click(addButton);
    expect(screen.getByText(/Curly Cut/i)).toBeInTheDocument();

    const removeButton = screen.getByText(/Remove/i);
    fireEvent.click(removeButton);
    expect(screen.queryByText(/Curly Cut/i)).not.toBeInTheDocument();
  });

  test('fetches and displays data for editing', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        name: "Existing Stylist",
        email: 'existing@example.com',
        level: 'Stylist',
        stylistAvailabilities: ['2024-12-12T10:00'],
        stylistHairstylesOffered: [{ name: 'Cut', time: 30, price: 25 }]
      })
    });

    renderComponent();

    await waitFor(() => {
      expect(screen.getByLabelText(/Full Name/i)).toHaveDisplayValue("Existing Stylist");
      expect(screen.getByLabelText(/Email Address/i)).toHaveDisplayValue("existing@example.com");
    });
  });

  // Additional tests for increased coverage

  test('displays error message if fetchData fails', async () => {
    fetch.mockRejectedValueOnce(new Error('Fetch error'));

    renderComponent();

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        expect.stringContaining('Fetching record failed:'),
        expect.any(Error)
      );
    });
  });

  test('navigates to home if fetched data is empty', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => null,
    });

    renderComponent();

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });

  test('displays customer preferences when role is set to Customer', () => {
    renderComponent();
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: "Customer" } });

    expect(screen.getByLabelText(/Hair Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Preferred Services/i)).toBeInTheDocument();
  });

  test('does not add an availability slot if input is empty', () => {
    renderComponent();
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: "Stylist" } });

    const addButton = screen.getByText(/Add Slot/i);
    fireEvent.click(addButton);

    expect(global.alert).toHaveBeenCalledWith("Please select a valid time slot.");
  });

  test('does not add a hairstyle if any input is empty', () => {
    renderComponent();
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: "Stylist" } });

    const nameInput = screen.getByPlaceholderText(/Style Name/i);
    const addButton = screen.getByText(/Add Hairstyle/i);

    fireEvent.change(nameInput, { target: { value: 'Curly Cut' } });
    fireEvent.click(addButton);

    expect(global.alert).toHaveBeenCalledWith("Please fill in all hairstyle fields.");
  });

  test('submits form data and clears form on successful submission', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    });

    renderComponent();

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: 'Stylist' } });

    const submitButton = screen.getByRole('button', { name: /Save Profile/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(expect.stringContaining('/record'), expect.any(Object));
    });

    expect(screen.getByLabelText(/Full Name/i).value).toBe("");
    expect(screen.getByLabelText(/Email Address/i).value).toBe("");
    expect(screen.getByLabelText(/Role/i).value).toBe("");
  });

  test('does not submit form and shows error if required fields are missing', async () => {
    renderComponent();

    const submitButton = screen.getByRole('button', { name: /Save Profile/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByText((content, element) => 
        element?.textContent === "Please fill out all required fields."
      );
      expect(errorMessage).toBeInTheDocument();
    });
    expect(fetch).not.toHaveBeenCalled();
  });

  test('updateForm correctly updates form state', () => {
    renderComponent();

    const nameInput = screen.getByLabelText(/Full Name/i);
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });

    expect(nameInput.value).toBe("Jane Doe");
  });

  // Lines 35-46: Fetch data handling when id is provided or missing
  test('does not fetch data if no id is provided', () => {
    renderComponent();
    expect(fetch).not.toHaveBeenCalled();
  });

  test('fetches data if id is provided in params', async () => {
    const mockRecord = {
      name: "Jane Doe",
      email: "jane@example.com",
      level: "Stylist",
    };
    
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockRecord,
    });

    render(
      <Router>
        <Record navigate={mockNavigate} />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByDisplayValue("Jane Doe")).toBeInTheDocument();
    });
  });

  // Lines 104-107: Test handleAddSlot for empty and non-empty slot
  test('handleAddSlot - does not add empty slot', () => {
    renderComponent();
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: 'Stylist' } });
    
    const addButton = screen.getByText(/Add Slot/i);
    fireEvent.click(addButton);
    expect(global.alert).toHaveBeenCalledWith("Please select a valid time slot.");
  });

  test('handleAddSlot - adds a valid slot', () => {
    renderComponent();
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: 'Stylist' } });

    const dateTimeInput = screen.getByLabelText(/Stylist Availabilities/i);
    fireEvent.change(dateTimeInput, { target: { value: '2024-12-12T10:00' } });
    
    fireEvent.click(screen.getByText(/Add Slot/i));
    expect(screen.getByText(/12\/12\/2024/i)).toBeInTheDocument();
  });

  // Lines 123-126: handleRemoveSlot - remove an added slot
  test('handleRemoveSlot removes an availability slot', () => {
    renderComponent();
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: 'Stylist' } });

    const dateTimeInput = screen.getByLabelText(/Stylist Availabilities/i);
    fireEvent.change(dateTimeInput, { target: { value: '2024-12-12T10:00' } });
    fireEvent.click(screen.getByText(/Add Slot/i));

    const removeButton = screen.getByText(/Remove/i);
    fireEvent.click(removeButton);
    expect(screen.queryByText(/12\/12\/2024/i)).not.toBeInTheDocument();
  });

  // Line 206: Validate error message when required fields are missing on submission
  test('displays error message when required fields are missing on form submission', async () => {
    renderComponent();

    const submitButton = screen.getByRole('button', { name: /Save Profile/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByText("Please fill out all required fields.");
      expect(errorMessage).toBeInTheDocument();
    });
    expect(fetch).not.toHaveBeenCalled();
  });

  // Lines 249-288: handleAddHairstyle and handleRemoveHairstyle - add and remove a hairstyle
  test('adds and removes hairstyle from stylist offerings', () => {
    renderComponent();
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: "Stylist" } });

    const nameInput = screen.getByPlaceholderText(/Style Name/i);
    const timeInput = screen.getByPlaceholderText(/Time \(mins\)/i);
    const priceInput = screen.getByPlaceholderText(/Price \(\$\)/i);

    fireEvent.change(nameInput, { target: { value: 'Curly Cut' } });
    fireEvent.change(timeInput, { target: { value: '45' } });
    fireEvent.change(priceInput, { target: { value: '50' } });
    fireEvent.click(screen.getByText(/Add Hairstyle/i));

    expect(screen.getByText(/Curly Cut/i)).toBeInTheDocument();

    const removeButton = screen.getByText(/Remove/i);
    fireEvent.click(removeButton);
    expect(screen.queryByText(/Curly Cut/i)).not.toBeInTheDocument();
  });

  // Lines 423-454: Validate display of stylist availabilities and offered hairstyles
  test('displays stylist availabilities and hairstyles offered', () => {
    renderComponent();
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: "Stylist" } });

    // Adding availability slot
    const dateTimeInput = screen.getByLabelText(/Stylist Availabilities/i);
    fireEvent.change(dateTimeInput, { target: { value: '2024-12-12T10:00' } });
    fireEvent.click(screen.getByText(/Add Slot/i));
    expect(screen.getByText(/12\/12\/2024/i)).toBeInTheDocument();

    // Adding hairstyle
    fireEvent.change(screen.getByPlaceholderText(/Style Name/i), { target: { value: 'Curly Cut' } });
    fireEvent.change(screen.getByPlaceholderText(/Time \(mins\)/i), { target: { value: '45' } });
    fireEvent.change(screen.getByPlaceholderText(/Price \(\$\)/i), { target: { value: '50' } });
    fireEvent.click(screen.getByText(/Add Hairstyle/i));
    expect(screen.getByText(/Curly Cut/i)).toBeInTheDocument();
  });
});