// App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import axios from 'axios';
import App from './App';

// Mock axios
jest.mock('axios');

describe('App Component', () => {
  
  // Test if the App component renders without crashing
  it('renders App component correctly', () => {
    render(<App />);
    const titleElement = screen.getByText(/Welcome to My App/i); // Adjust this to match your app's text
    expect(titleElement).toBeInTheDocument();
  });

  // Test an API call (Google Auth example)
  it('fetches Google Auth data when button is clicked', async () => {
    const mockData = { data: { success: true, token: 'mockToken' } };
    axios.get.mockResolvedValueOnce(mockData);

    render(<App />);

    const googleAuthButton = screen.getByRole('button', { name: /Login with Google/i });
    fireEvent.click(googleAuthButton);

    // Assuming that clicking the button triggers the API and shows a success message
    const successMessage = await screen.findByText(/Login successful!/i);
    expect(successMessage).toBeInTheDocument();

    // Check if the API call was made
    expect(axios.get).toHaveBeenCalledWith('/auth/google?code=mockAuthCode');
  });
});
