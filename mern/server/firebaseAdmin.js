const admin = require("firebase-admin");
const serviceAccount = require("/hairbnb-ab317-firebase-adminsdk-fsdld-f9e230efe2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
