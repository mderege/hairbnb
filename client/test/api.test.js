// api.test.js
import axios from 'axios';
import { googleAuth } from './api';

// Mock axios
jest.mock('axios');

describe('API Calls', () => {

  // Test the googleAuth API call
  it('fetches Google Auth data successfully', async () => {
    const mockData = { data: { success: true, token: 'mockToken' } };
    axios.get.mockResolvedValueOnce(mockData);

    const result = await googleAuth('mockAuthCode');
    expect(result.data).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledWith('/auth/google?code=mockAuthCode');
  });

  // Test API call failure
  it('handles API call failure', async () => {
    axios.get.mockRejectedValueOnce(new Error('API call failed'));

    await expect(googleAuth('mockAuthCode')).rejects.toThrow('API call failed');
  });
});
