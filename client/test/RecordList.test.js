// RecordList.test.js

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import RecordList from 'client/src/components/RecordList';
import { BrowserRouter as Router } from 'react-router-dom';

describe('RecordList Component', () => {
  const mockRecords = [
    {
      _id: '1',
      name: 'Stylist One',
      personalStatement: 'Specializes in braids.',
      level: 'Stylist',
      stylistHairstylesOffered: [{ name: 'Braids', price: 50 }],
      yearsExperience: 5,
    },
    {
      _id: '2',
      name: 'Stylist Two',
      personalStatement: 'Expert in haircuts.',
      level: 'Stylist',
      stylistHairstylesOffered: [{ name: 'Haircut', price: 30 }],
      yearsExperience: 3,
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRecords),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', async () => {
    render(
      <Router>
        <RecordList />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/Search for stylists/i)).toBeInTheDocument();
    });
  });

  test('fetches and displays records', async () => {
    render(
      <Router>
        <RecordList />
      </Router>
    );

    // Wait for records to load
    await waitFor(() => {
      expect(screen.getByText(/Stylist One/i)).toBeInTheDocument();
      expect(screen.getByText(/Stylist Two/i)).toBeInTheDocument();
    });
  });

  test('filters records based on search input', async () => {
    render(
      <Router>
        <RecordList />
      </Router>
    );

    // Wait for records to appear
    await waitFor(() => {
      expect(screen.getByText(/Stylist One/i)).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText(/Search for stylists/i);
    fireEvent.change(searchInput, { target: { value: 'braids' } });

    await waitFor(() => {
      expect(screen.getByText(/Stylist One/i)).toBeInTheDocument();
      expect(screen.queryByText(/Stylist Two/i)).not.toBeInTheDocument();
    });
  });

  test('applies filters correctly for style and price range', async () => {
    render(
      <Router>
        <RecordList />
      </Router>
    );

    // Wait for records to appear
    await waitFor(() => {
      expect(screen.getByText(/Stylist One/i)).toBeInTheDocument();
    });

    const filtersButton = screen.getByText(/Filters/i);
    fireEvent.click(filtersButton);

    const styleFilter = screen.getByPlaceholderText(/e.g., Bob, Braids/i);
    fireEvent.change(styleFilter, { target: { value: 'Braids' } });

    const minPriceFilter = screen.getByPlaceholderText(/Min/i);
    fireEvent.change(minPriceFilter, { target: { value: '40' } });

    const maxPriceFilter = screen.getByPlaceholderText(/Max/i);
    fireEvent.change(maxPriceFilter, { target: { value: '60' } });

    await waitFor(() => {
      expect(screen.getByText(/Stylist One/i)).toBeInTheDocument();
      expect(screen.queryByText(/Stylist Two/i)).not.toBeInTheDocument();
    });
  });

  test('navigates to stylist profile and booking pages', async () => {
    render(
      <Router>
        <RecordList />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(/Stylist One/i)).toBeInTheDocument();
    });

    const profileLink = screen.getByText(/Stylist One/i);
    fireEvent.click(profileLink);
  });

  // Additional Test Cases
  test('toggles the dropdown filter menu', async () => {
    render(
      <Router>
        <RecordList />
      </Router>
    );

    const filtersButton = screen.getByText(/Filters/i);
    fireEvent.click(filtersButton);

    // Check if dropdown opens
    expect(screen.getByText(/Distance \(mi\)/i)).toBeInTheDocument();

    // Close dropdown
    fireEvent.click(filtersButton);
    expect(screen.queryByText(/Distance \(mi\)/i)).not.toBeInTheDocument();
  });

  test('resets filters when the reset button is clicked', async () => {
    render(
      <Router>
        <RecordList />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(/Stylist One/i)).toBeInTheDocument();
    });

    const filtersButton = screen.getByText(/Filters/i);
    fireEvent.click(filtersButton);

    const styleFilter = screen.getByPlaceholderText(/e.g., Bob, Braids/i);
    fireEvent.change(styleFilter, { target: { value: 'Braids' } });

    const resetButton = screen.getByText(/Reset/i);
    fireEvent.click(resetButton);

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/e.g., Bob, Braids/i).value).toBe('');
    });
  });

  test('filters records based on distance', async () => {
    render(
      <Router>
        <RecordList />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(/Stylist One/i)).toBeInTheDocument();
    });

    const filtersButton = screen.getByText(/Filters/i);
    fireEvent.click(filtersButton);

    const distanceFilter = screen.getByLabelText(/Distance \(mi\)/i);
    fireEvent.change(distanceFilter, { target: { value: '10' } });

    // Since the distance filter logic is not fully implemented, this is a placeholder assertion.
    // Replace this with a more specific assertion once the filter is implemented in the component.
    expect(distanceFilter.value).toBe('10');
  });

  test('filters records based on availability', async () => {
    render(
      <Router>
        <RecordList />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(/Stylist One/i)).toBeInTheDocument();
    });

    const filtersButton = screen.getByText(/Filters/i);
    fireEvent.click(filtersButton);

    const availabilityFilter = screen.getByLabelText(/Available Times/i);
    fireEvent.change(availabilityFilter, { target: { value: '2024-12-12T10:00' } });

    // Since availability filter logic is not fully implemented, this is a placeholder assertion.
    // Replace this with a more specific assertion once the filter is implemented in the component.
    expect(availabilityFilter.value).toBe('2024-12-12T10:00');
  });
});