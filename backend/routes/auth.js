
const express = require('express')
const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcryptjs')
const fetchuser = require('../middleware/fetchuser')
var jwt = require('jsonwebtoken')

const JWT_SECRET = "Mynameismuzammil"



// create user using route '/api/auth/createuser' no Auth required
router.post('/register' ,async (req, res) => {
    const { name, email, password, image} = req.body
    const userExists = await User.findOne({ email })


    if (userExists) {
        return res.status(400).send("Email already exists");
    }
    const salt = await bcrypt.genSalt(10)
    secPass = await bcrypt.hash(password, salt)
    const user = await User.create({
        name,
        email,
        password: secPass,
        image
    })
 
    const data = {
        user: {
            id: user.id
        }
    }
    const authToken = jwt.sign(data, JWT_SECRET)


    if (user) {
        res.status(201).json({
            name: user.name,
            email: user.email,
            id:user.id,
            image,
            authToken
        })
    }
    else {
        res.status(400)
        throw new Error('invalid user data')
    }
})



// Login user using route '/api/auth/login' no Auth required
router.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email})
        if (!user) {
            return res.status(400).send("invalid email")
        }
        let comparePassword = await bcrypt.compare(password, user.password)
        if (!comparePassword) {
            return res.status(400).send("invalid password")
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        res.json({
            name: user.name,
            email: user.email,
            id:user.id,
            image:user.image,
            authToken
        })
    } catch (error) { 
        console.error(error.message)
        res.status(500).send("internal server error")
    }

})


// getuser details using route '/api/auth/getuser' Auth required
router.get('/getuser', fetchuser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }
})

module.exports = router