import express from "express"; // web framework for node.js
import cors from "cors";
import records from "./routes/record.js";
import sendEmail from "./utils/emailNotif.js";


const PORT = process.env.PORT || 5050; // chosen port for server
const app = express(); // instance of the Express application

app.use(cors()); // enables CORS for all routes
app.use(express.json()); // parses incoming JSON payloads (A JSON payload is a set of key-value pairs that can represent various data types, such as objects, numbers, strings, arrays, booleans, and null)
app.use("/record", records); // adds the records router to the /record path

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
    const emailSender = process.env.EMAIL_USER;
    const replySend = process.env.EMAIL_USER;
    const emailReciepient = 'mahlet.derege@vanderbilt.edu'
    await sendEmail(emailSubject, emailMessage, emailReciepient, emailSender, replySend)
    res.status(200).json({success: true, message: "Email Sent"})
  } catch (error){
    res.status(500).json(error.message)
  }
});
// e.g. accessing a certain record by ID might look like /record/1234
// running /record gets all records

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); // starts up the express server
});