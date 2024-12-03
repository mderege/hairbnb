import express from 'express';
import User from '../models/User.js';

const router = express.Router(); // Initialize the router

// routes/authRoutes.js
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  console.log("received data:", req.body);
  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = new User({ name, email, password, level });
    await user.save();


    // Verify password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully' });  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 