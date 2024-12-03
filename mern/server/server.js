import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import records from './routes/record.js';
import sendEmail from './utils/emailNotif.js';
import userRoutes from './routes/userRoutes.js';
import login from './routes/login.js'; 
import User from './models/User.js';

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB using environment variable for the connection string
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Define your routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use("/records", records); // Record routes
app.use("/login", login); // Login routes




app.get("/users/email/:email", async (req, res) => {
  try {
    // Fetch user data from MongoDB using the email from the URL parameter
    console.log("in serverside")
    const user = await User.findByEmail(req.params.email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });  // If no user is found, return 404
    }
    res.json(user);  // Return the user profile data from MongoDB
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });  // Handle server errors
  }
});


// app.get("/users/:uid", async (req, res) => {
//   try {
//     const user = await User.findByUid(req.params.uid);  // Fetch the user profile using their Firebase UID
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });  // If no user is found, return a 404
//     }
//     res.json(user);  // Return the user data from MongoDB
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });  // Handle server errors
//   }
// });



// Email route
app.post("/api/sendmail", async (req, res) => {
  const { email, bookingTime, stylistName } = req.body;
  try {
    const emailSubject = `Appointment Confirmation with ${stylistName}`;
    const emailMessage = `
      <h2>Appointment Confirmation</h2>
      <p>Dear Customer,</p>
      <p>Your appointment with ${stylistName} has been confirmed for ${bookingTime}.</p>
      <p>We look forward to seeing you then!</p>
    `;
    const emailSender = process.env.EMAIL_SENDER; // Use environment variable for sender email
    const replySend = process.env.EMAIL_REPLY_PASSWORD; // Use environment variable for email reply password
    const emailRecipient = email; // Use provided email in the request body

    await sendEmail(emailSubject, emailMessage, emailRecipient, emailSender, replySend);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    console.error("Error sending email:", error); // Log the error for debugging
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});