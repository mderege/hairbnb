import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.ATLAS_URI || "";
// const username = encodeURIComponent("stephaniejting");
// const password = encodeURIComponent("12167002337");

// const uri = "mongodb+srv://stephaniejting:12167002337@HairBnB.66d0c02073f6c33cb91e5cd4.mongodb.net/employees?retryWrites=true&w=majorityPORT=5050"
const uri = "mongodb+srv://stephaniejting:12167002337@hairbnb.rmuyh.mongodb.net/"
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("employees");

export default db;