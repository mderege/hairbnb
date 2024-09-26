const User = require('../models/userModel')
const jsonWebToken = require('jsonwebtoken')

const makeToken = (id) => {

    jsonWebToken.sign({id: id}, process.env.CODE, {expiresIn: '7d'})
}

const userLogin = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password)

        const token = makeToken(user.id)
        res.status(200).json({email, token})

    } catch (error){
        res.status(400).json({error: error.message})
    }
}

const userSignup = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.signup(email, password)

        const token = makeToken(user.id)
        res.status(200).json({email, token})

    } catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {userLogin, userSignup}