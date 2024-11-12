// jest.setup.js
import '@testing-library/jest-dom'; // if you're using testing-library

// jest.setup.js
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
