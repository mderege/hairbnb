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

    // Ideally, here you'd check if `navigate` was called with the correct URL
  });
});