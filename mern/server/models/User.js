// // User.js
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

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    personalStatement: { type: String, default: '' },
    level: { type: String, default: 'User' }, // Default to 'User' if no level provided
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    preferredService: { type: String, default: '' },
    hairType: { type: String, default: '' },
    stylistHairstylesOffered: { type: [String], default: [] }, // Array of strings
    stylistCertification: { type: String, default: '' },
    yearsExperience: { type: String, default: '' },
    stylistAvailabilities: { type: [String], default: [] }, // Array of strings
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
