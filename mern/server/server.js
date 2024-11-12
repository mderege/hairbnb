import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import records from './routes/record.js';
import sendEmail from './utils/emailNotif.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

// Rest of your code
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://stephaniejting:12167002337@hairbnb.rmuyh.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.use('/api/auth', authRoutes); // Use the default import directly
app.use("/record", records);

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
    const emailSender = 'hairbnbco@gmail.com';
    const replySend = 'uemn ijvl iloi kvfq';
    const emailRecipient = "mahlet.derege@vanderbilt.edu";

    await sendEmail(emailSubject, emailMessage, emailRecipient, emailSender, replySend);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});