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
  let results = await collection.find({}).toArray();
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

// This section will help you create a new record.
router.post("/", async (req, res) => {
  try {
    let newDocument = { // perhaps we change these up?
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
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
        position: req.body.position,
        level: req.body.level,
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

// // Stylist Routes

// // Get all stylists
// router.get("/stylists", async (req, res) => {
//   let collection = await db.collection("stylists");
//   let results = await collection.find({}).toArray();
//   res.send(results).status(200);
// });

// // Get a single stylist
// router.get("/stylists/:id", async (req, res) => {
//   let collection = await db.collection("stylists");
//   let query = { _id: new ObjectId(req.params.id) };
//   let result = await collection.findOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// // Create a new stylist profile
// router.post("/stylists", async (req, res) => {
//   try {
//     let newStylist = {
//       name: req.body.name,
//       hairstyles: req.body.hairstyles, // Array of objects with style and fee
//       address: req.body.address,
//       yearsExperience: req.body.yearsExperience,
//       // Add other relevant fields
//     };
//     let collection = await db.collection("stylists");
//     let result = await collection.insertOne(newStylist);
//     res.send(result).status(201);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error adding stylist profile");
//   }
// });

// // Update a stylist profile
// router.patch("/stylists/:id", async (req, res) => {
//   try {
//     const query = { _id: new ObjectId(req.params.id) };
//     const updates = {
//       $set: {
//         name: req.body.name,
//         hairstyles: req.body.hairstyles,
//         address: req.body.address,
//         yearsExperience: req.body.yearsExperience,
//         // Update other fields as needed
//       },
//     };

//     let collection = await db.collection("stylists");
//     let result = await collection.updateOne(query, updates);
//     res.send(result).status(200);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error updating stylist profile");
//   }
// });

// // Client Routes

// // Get all clients
// router.get("/clients", async (req, res) => {
//   let collection = await db.collection("clients");
//   let results = await collection.find({}).toArray();
//   res.send(results).status(200);
// });

// // Get a single client
// router.get("/clients/:id", async (req, res) => {
//   let collection = await db.collection("clients");
//   let query = { _id: new ObjectId(req.params.id) };
//   let result = await collection.findOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// // Create a new client profile
// router.post("/clients", async (req, res) => {
//   try {
//     let newClient = {
//       name: req.body.name,
//       hairType: req.body.hairType,
//       desiredHairstyles: req.body.desiredHairstyles, // Array of desired styles
//       // Add other relevant fields
//     };
//     let collection = await db.collection("clients");
//     let result = await collection.insertOne(newClient);
//     res.send(result).status(201);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error adding client profile");
//   }
// });

// // Update a client profile
// router.patch("/clients/:id", async (req, res) => {
//   try {
//     const query = { _id: new ObjectId(req.params.id) };
//     const updates = {
//       $set: {
//         name: req.body.name,
//         hairType: req.body.hairType,
//         desiredHairstyles: req.body.desiredHairstyles,
//         // Update other fields as needed
//       },
//     };

//     let collection = await db.collection("clients");
//     let result = await collection.updateOne(query, updates);
//     res.send(result).status(200);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error updating client profile");
//   }
// });

// // Delete routes for both stylists and clients can be added similarly

// export default router;