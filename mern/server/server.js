import express from "express"; // web framework for node.js
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050; // chosen port for server
// const express = require('express');
// const mongoSanitize = require('express-mongo-sanitize');
// const xss = require('xss-clean');
// const morgan = require('morgan');
// const path = require('path');
// const compression = require('compression');
// const rateLimit = require('express-rate-limit');
// const dotenv = require('dotenv');

const router = require('/routes/routes');
const authRouter = require('/routes/authRoutes');
const AppError = require('/utils/appError');
const errorController = require('/controllers/errorController');

const app = express();
app.use(compression());

app.use('/api/v1/auth/', authRouter); // <- NEW LINE
app.use('/api/v1/', router);

app.all('*', (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(errorController); // <- Error Handling Middleware

module.exports = app;
app.use(cors()); // enables CORS for all routes
app.use(express.json()); // parses incoming JSON payloads (A JSON payload is a set of key-value pairs that can represent various data types, such as objects, numbers, strings, arrays, booleans, and null)
app.use("/record", records); // adds the records router to the /record path



// e.g. accessing a certain record by ID might look like /record/1234
// running /record gets all records

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); // starts up the express server
});
