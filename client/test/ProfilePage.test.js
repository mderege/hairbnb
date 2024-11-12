// ProfilePage.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import ProfilePage from 'client/src/components/ProfilePage';
import axios from 'axios';

jest.mock('axios');

// Mock the alert function to avoid the JSDOM "not implemented" error
global.alert = jest.fn();

describe('ProfilePage Component', () => {
  const mockProfileData = {
    name: 'John Doe',
    email: 'john@example.com',
    appointments: [
      { id: 1, time: new Date(Date.now() + 100000).toISOString() }, // Upcoming
      { id: 2, time: new Date(Date.now() - 100000).toISOString() }, // Past
    ],
  };

  beforeEach(() => {
    axios.get.mockResolvedValue({ status: 200, data: mockProfileData });
    axios.delete.mockResolvedValue({ status: 200 });
    global.alert.mockClear();
  });

  test('renders loading message initially', () => {
    render(<ProfilePage />);
    expect(screen.getByText(/Hi, I work/i)).toBeInTheDocument();
  });

  test('fetches and displays profile information', async () => {
    render(<ProfilePage />);

    await waitFor(() => {
      expect(screen.getByText(/John Doe's Profile/i)).toBeInTheDocument();
      expect(screen.getByText(/Email:/i)).toBeInTheDocument();
      expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
    });
  });

  test('displays upcoming and past appointments correctly', async () => {
    render(<ProfilePage />);

    await waitFor(() => {
      expect(screen.getByText(/Upcoming Appointments/i)).toBeInTheDocument();
      expect(screen.getByText(/Past Appointments/i)).toBeInTheDocument();
    });

    const upcomingAppointmentTime = new Date(mockProfileData.appointments[0].time).toLocaleString();
    const pastAppointmentTime = new Date(mockProfileData.appointments[1].time).toLocaleString();

    expect(screen.getByText(upcomingAppointmentTime)).toBeInTheDocument();
    expect(screen.getByText(pastAppointmentTime)).toBeInTheDocument();
  });

  test('cancels an upcoming appointment', async () => {
    render(<ProfilePage />);

    await waitFor(() => screen.getByText(/Cancel/i));

    // Wrap cancellation in `act` to avoid warnings
    await act(async () => {
      fireEvent.click(screen.getByText(/Cancel/i));
    });

    expect(axios.delete).toHaveBeenCalledWith('http://localhost:5050/appointments/1');
    expect(global.alert).toHaveBeenCalledWith('Appointment canceled');
  });

  test('displays message when there are no upcoming or past appointments', async () => {
    const mockProfileNoAppointments = {
      ...mockProfileData,
      appointments: [],
    };
    axios.get.mockResolvedValueOnce({ status: 200, data: mockProfileNoAppointments });

    render(<ProfilePage />);

    await waitFor(() => {
      expect(screen.getByText(/No upcoming appointments./i)).toBeInTheDocument();
      expect(screen.getByText(/No past appointments./i)).toBeInTheDocument();
    });
  });
});