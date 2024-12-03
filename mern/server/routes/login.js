// login.js
import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    // Simulate successful login by returning a hardcoded user object
    const hardcodedUser = {
        id: '12345', // Example user ID
        email: 'sim@gmail.com',
        password: 'sim123456',
        name: 'Hardcoded User'
    };

    res.status(200).json({
        message: 'Login successful',
    });
});

export default router;