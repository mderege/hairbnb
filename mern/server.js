import express from "express"; // web framework for node.js
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050; // chosen port for server
const app = express(); // instance of the Express application

app.use(cors()); // enables CORS for all routes
app.use(express.json()); // parses incoming JSON payloads (A JSON payload is a set of key-value pairs that can represent various data types, such as objects, numbers, strings, arrays, booleans, and null)
app.use("/record", records); // adds the records router to the /record path

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); // starts up the express server
});