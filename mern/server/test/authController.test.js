// authController.test.js

const axios = require('axios');
const jwt = require('jsonwebtoken');
const oauth2Client = require('../utils/oauth2client');
const User = require('../models/UserModel'); // Ensure path and filename match
const { googleAuth } = require('../controllers/authController');
const AppError = require('../utils/appError');

// Mocks
jest.mock('axios');
jest.mock('jsonwebtoken');
jest.mock('../utils/oauth2client');
jest.mock('../models/UserModel', () => ({
  findOne: jest.fn(),
  create: jest.fn(),
}));

describe('Google Authentication API', () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      query: { code: 'test-code' },
    };
    res = {
      cookie: jest.fn(),
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it('should authenticate a new user and send token', async () => {
    // Mock Google OAuth response
    oauth2Client.oauth2Client.getToken.mockResolvedValue({
      tokens: { access_token: 'test-access-token' },
    });
    oauth2Client.oauth2Client.setCredentials = jest.fn();

    // Mock Google user info response
    axios.get.mockResolvedValue({
      data: {
        email: 'newuser@example.com',
        name: 'New User',
        picture: 'test-image-url',
      },
    });

    // Mock User model to simulate a new user creation
    User.findOne.mockResolvedValue(null); // No existing user
    User.create.mockResolvedValue({
      id: 'new-user-id',
      name: 'New User',
      email: 'newuser@example.com',
      image: 'test-image-url',
    });

    // Mock JWT token creation
    jwt.sign.mockReturnValue('test-jwt-token');

    await googleAuth(req, res, next);

    expect(User.create).toHaveBeenCalledWith({
      name: 'New User',
      email: 'newuser@example.com',
      image: 'test-image-url',
    });
    expect(res.cookie).toHaveBeenCalledWith(
      'jwt',
      'test-jwt-token',
      expect.objectContaining({
        httpOnly: true,
        path: '/',
      })
    );
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: 'success',
      token: 'test-jwt-token',
      data: {
        user: expect.objectContaining({
          name: 'New User',
          email: 'newuser@example.com',
        }),
      },
    });
  });

  it('should authenticate an existing user and send token', async () => {
    // Mock Google OAuth response
    oauth2Client.oauth2Client.getToken.mockResolvedValue({
      tokens: { access_token: 'test-access-token' },
    });
    oauth2Client.oauth2Client.setCredentials = jest.fn();

    // Mock Google user info response
    axios.get.mockResolvedValue({
      data: {
        email: 'existinguser@example.com',
        name: 'Existing User',
        picture: 'existing-image-url',
      },
    });

    // Mock User model to simulate finding an existing user
    User.findOne.mockResolvedValue({
      id: 'existing-user-id',
      name: 'Existing User',
      email: 'existinguser@example.com',
      image: 'existing-image-url',
    });

    jwt.sign.mockReturnValue('test-jwt-token');

    await googleAuth(req, res, next);

    expect(User.create).not.toHaveBeenCalled();
    expect(res.cookie).toHaveBeenCalledWith(
      'jwt',
      'test-jwt-token',
      expect.objectContaining({
        httpOnly: true,
        path: '/',
      })
    );
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: 'success',
      token: 'test-jwt-token',
      data: {
        user: expect.objectContaining({
          name: 'Existing User',
          email: 'existinguser@example.com',
        }),
      },
    });
  });

  it('should handle errors from Google OAuth client', async () => {
    oauth2Client.oauth2Client.getToken.mockRejectedValue(new Error('OAuth error'));

    await googleAuth(req, res, next);

    expect(next).toHaveBeenCalledWith(expect.any(AppError));
  });

  it('should handle errors from Google user info API', async () => {
    oauth2Client.oauth2Client.getToken.mockResolvedValue({
      tokens: { access_token: 'test-access-token' },
    });
    axios.get.mockRejectedValue(new Error('Google API error'));

    await googleAuth(req, res, next);

    expect(next).toHaveBeenCalledWith(expect.any(AppError));
  });

  it('should handle errors during user creation', async () => {
    oauth2Client.oauth2Client.getToken.mockResolvedValue({
      tokens: { access_token: 'test-access-token' },
    });
    axios.get.mockResolvedValue({
      data: {
        email: 'newuser@example.com',
        name: 'New User',
        picture: 'test-image-url',
      },
    });

    User.findOne.mockResolvedValue(null);
    User.create.mockRejectedValue(new Error('Database error'));

    await googleAuth(req, res, next);

    expect(next).toHaveBeenCalledWith(expect.any(AppError));
  });
});
