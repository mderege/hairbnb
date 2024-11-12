import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import StylistPage from 'client/src/components/StylingPage.jsx';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
}));

global.fetch = jest.fn();

describe('StylistPage Component', () => {
  beforeEach(() => {
    fetch.mockClear();
    fetch.mockImplementation((url) => {
      if (url.includes('/record/1')) {
        return Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              name: 'John Doe',
              personalStatement: 'Experienced stylist',
              yearsExperience: 5,
              stylistCertification: 'Certified Stylist',
              stylistHairstylesOffered: [
                { name: 'Classic Bob Cut', time: 30, price: 50 },
              ],
              stylistAvailabilities: [
                '2024-11-15T04:00:00Z', // Friday 4:00 AM
                '2024-11-16T09:00:00Z', // Saturday 9:00 AM
              ],
            }),
        });
      }
      return Promise.reject(new Error('not found'));
    });

    global.alert = jest.fn();
  });

  test('displays stylist information correctly', async () => {
    render(
      <MemoryRouter initialEntries={['/stylist/1']}>
        <Routes>
          <Route path="/stylist/:id" element={<StylistPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("John Doe's Page")).toBeInTheDocument();
    });

    expect(screen.getByText('Experienced stylist')).toBeInTheDocument();
    expect(screen.getByText('5 years')).toBeInTheDocument();
    expect(screen.getByText('Certified Stylist')).toBeInTheDocument();
    expect(screen.getByText('Hairstyles Offered')).toBeInTheDocument();
  });

  test('displays hairstyle offerings', async () => {
    render(
      <MemoryRouter initialEntries={['/stylist/1']}>
        <Routes>
          <Route path="/stylist/:id" element={<StylistPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Classic Bob Cut')).toBeInTheDocument();
    });

    expect(screen.getByText('Time: 30 mins')).toBeInTheDocument();
    expect(screen.getByText('Price: $50')).toBeInTheDocument();
  });

  test('handles booking selection and triggers email functionality', async () => {
    render(
      <MemoryRouter initialEntries={['/stylist/1']}>
        <Routes>
          <Route path="/stylist/:id" element={<StylistPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Book an Appointment')).toBeInTheDocument();
    });

    // Simulate selecting a booking time and clicking 'Book Now'
    fireEvent.click(screen.getByLabelText(/Thursday/i));
    fireEvent.click(screen.getByText(/Book Now/i));

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalled();
    });
  });

  test('displays customer reviews', async () => {
    render(
      <MemoryRouter initialEntries={['/stylist/1']}>
        <Routes>
          <Route path="/stylist/:id" element={<StylistPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Customer Reviews')).toBeInTheDocument();
    });

    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Rating: ★★★★★')).toBeInTheDocument();
    expect(screen.getByText('Amazing experience!')).toBeInTheDocument();

    expect(screen.getByText('John Smith')).toBeInTheDocument();
    expect(screen.getByText('Rating: ★★★★☆')).toBeInTheDocument();
    expect(screen.getByText('Very professional!')).toBeInTheDocument();
  });
});