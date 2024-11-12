// register.js or as a function within your userRoutes.js
import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create the new user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                email: newUser.email,
                name: newUser.name
            }
        });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;