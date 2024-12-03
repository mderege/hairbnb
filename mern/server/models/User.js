// User.js
// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: { type: String, unique: true },
//     password: { type: String, required: true },
//     // Other fields as necessary
// });

// // Hash password before saving
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 12);
//     next();
// });

// // Compare password method
// userSchema.methods.comparePassword = async function (candidatePassword) {
//     return await bcrypt.compare(candidatePassword, this.password);
// };

// const User = mongoose.model('User', userSchema);
// export default User;

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Define user schema with necessary fields
const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },  // Store Firebase UID here
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  level: { type: String, enum: ['Stylist', 'Client'], required: true },  // Stylist or Client
  stylistAvailabilities: { type: [String], default: [] },  // Store availability slots
  stylistHairstylesOffered: { type: [Object], default: [] },  // Store hairstyle offerings
  stylistCertification: { type: String, default: "" },
  yearsExperience: { type: String, default: "" },
  preferredService: { type: String, default: "" },
  hairType: { type: String, default: "" },
  personalStatement: { type: String, default: "" }
});

// Hash password before saving it to the database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();  // If password is not modified, skip hashing
  this.password = await bcrypt.hash(this.password, 12);  // Hash the password with bcrypt
  next();
});

// Compare password method to validate user input password against the stored hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);  // Compare given password with hashed password
};

// Find a user by Firebase UID
userSchema.statics.findByUid = async function (uid) {
  return await this.findOne({ uid });  // Find user by Firebase UID
};

// Create and export the User model
const User = mongoose.model('User', userSchema);
export default User;
