const mongoose = require('mongoose')
const { default: SignUp } = require('../../../client/src/pages/signup')
const { userSignup, userLogin } = require('../controllers/userController')
const bcrypt = require('bcrpyt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    }
})

//static signup method to help with hashing
userSchema.statics.signup = async function(email, password) {
    const exists = await this.findOne({ email })
    
    if (!password || !email){
        throw Error('Fields Missing')
    }
    if (!validator.isEmail(email)){
        throw Error('Invalid Email')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Need Stronger Password. Incude at least 1 number, 1 letter (uppercase and lowercase), 1 special character')
    }

    
    if (exists) {
        throw Error("Email already registered")
    }

    const hash = await bcrypt.hash(password) //figure out salt 
    const user = await this.create({ email, password: hash})
    return user 
}

userSchema.statics.login = async function(email, password){
    if (!password || !email){
        throw Error('Fields Missing')
    }
    const user = await this.findOne({email})
    if (!user) {
        throw Error('Invalid Login Credentials')
    }
    const match = await bcrypt.compare(password, user.password)//compared hashed password and entered password

    if (!match) {
        throw Error('Invalid Login Credentials')
    }
    return user
}

module.exports = mongoose.model('User', userSchema) 