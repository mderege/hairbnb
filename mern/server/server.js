import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import records from './routes/record.js';
import sendEmail from './utils/emailNotif.js';
import userRoutes from './routes/userRoutes.js';
import login from './routes/login.js'; 

const app = express();

app.use(cors());
app.use(express.json());
//app.options('*', cors()); // Preflight support for all routes


// Connect to MongoDB using environment variable for the connection string
mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Define your routes
// app.get('/api/auth/test', (req, res) => {
//   res.send('Test route is working!');
// });

// app.use('/api/auth', (req, res, next) => {
//   console.log(`Received request: ${req.method} ${req.url}`);
//   next();
// }, userRoutes);

const allowedOrigins = [
  'http://localhost:5173', // Local development
  'http://localhost:5050', // Local development
  'https://hairbnb.vercel.app/',
  'https://hairbnbbe-9f629b6e0127.herokuapp.com' // Heroku production app
];

app.use(cors({
  origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
          callback(null, origin); // Allow the specific origin
      } else {
          callback(new Error('Not allowed by CORS'), false); // Deny the origin
      }
  },
  credentials: true // Enable cookies/authorization headers
}));


app.get('/test', (req, res) => {
  res.send('Server is up and running!');
});

app.get('/', (req, res) => {
  res.send('Welcome to the HairBnB API!');
});

app.use('/api/auth', userRoutes); // Authentication routes
app.use("/record", records); // Record routes
//app.use("/login", login); // Login routes

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