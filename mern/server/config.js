// server/config.js
import dotenv from 'dotenv';
dotenv.config();
const config = {
    mongoURI: 'mongodb+srv://stephaniejting:12167002337@hairbnb.rmuyh.mongodb.net/?retryWrites=true&w=majority&appName=HairBnB',
    jwtSecret: 'hello'
};
export default config;