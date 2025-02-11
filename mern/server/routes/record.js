import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// IMPORTANT -- SCROLL TO BOTTOM FOR POSSIBLE DIFFERENT TYPES OF RECORDS
// THIS IS IMPORTANT BECAUSE WE DON'T NEED AN EMPLOYEE DATABASE; RATHER, DATABASES OF STYLISTS AND CLIENTS

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("records"); // from the records collection
  let results = await collection.find({}).toArray(); // finds and returns all records
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.get("/email/:email", async (req, res) => {
  try {
    let collection = await db.collection("records");
    let query = { email: req.params.email };  // Query using email field
    let result = await collection.findOne(query);

    if (!result) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching user by email");
  }
});


// This section will help you create a new record.
router.post("/", async (req, res) => {
  try {
    let newDocument = { // alter these!
      name: req.body.name,
      personalStatement: req.body.personalStatement,
      level: req.body.level,
      email: req.body.email,
      password: req.body.password,
      preferredService: req.body.preferredService,
      hairType: req.body.hairType,
      stylistHairstylesOffered: req.body.stylistHairstylesOffered,
      stylistCertification: req.body.stylistCertification,
      yearsExperience: req.body.yearsExperience,
      stylistAvailabilities: req.body.stylistAvailabilities,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        personalStatement: req.body.personalStatement,
        level: req.body.level,
        email: req.body.email,
        password: req.body.password,
        preferredService: req.body.preferredService,
        hairType: req.body.hairType,
        stylistHairstylesOffered: req.body.stylistHairstylesOffered,
        stylistCertification: req.body.stylistCertification,
        yearsExperience: req.body.yearsExperience,
        stylistAvailabilities: req.body.stylistAvailabilities,
      },
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

export default router;