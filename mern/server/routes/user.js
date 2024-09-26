const express = require('express') //we need express to make different authenticated routes 

const { userLogin, userSignup } = require('../controllers/userController')

const router = express.Router() //makes instance of express router

//router.post('/login', userLogin) //login router - sending loginn data to server
router.post('/signup', userSignup) //signup router - sending signup info to server

module.exports = router 