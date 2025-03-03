
const User = require('../models/User')
const { signToken } = require('../utils/auth')
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser")


async function createUser(req, res) {
    try {
        const { firstName, lastName, email, password } = req.body

        const user = await User.create({ firstName, lastName, email, password })

        const token = signToken(user)

        res.cookie('userAuth', token, {
            secure: process.env.NODE_ENV === 'development',
            httpOnly: true,
        })

        res.status(200).json({ message: "success", isLoggedIn: true })


    } catch (error) {
        res.status(500).json(error.message)
    }
}


async function loginUser(req, res) {
    try {
        const { email, password } = req.body


        const user = await User.findOne({ email })

        if (!user) {

            return res.status(404).json({ errorMessage: 'Incorrect Credentials', isLoggedIn: false })
        }


        const passwordCheck = await user.isCorrectPassword(password)

        if (!passwordCheck) {

            return res.status(404).json({ errorMessage: 'Incorrect Credentials', isLoggedIn: false })
        }

        const token = signToken(user)

        res.cookie('userAuth', token, {
            secure: process.env.NODE_ENV === 'development',
            httpOnly: true,
        })



        res.status(200).json({ isLoggedIn: true })


    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}

async function userAuth(req, res) {
    // Grab token from cookies
    const token = req.cookies.userAuth

    //if no token (user is logged out) send error
    if (!token) {
        return res.status(401).json({ isLoggedIn: false })
    }

    // if token exists, verify
    try {
        const verified = jwt.verify(token, "secret")
        if (!verified) {
            return res.status(400).json({ isLoggedIn: false })
        }
        res.status(200).json({ isLoggedIn: true })
    } catch (error) {
        res.status(500).json(error)
    }

}

async function logoutUser(req, res) {
    const token = req.cookies.userAuth

    if (!token) {
        return res.status(404).json({ message: 'User is already logged out', isLoggedIn: false })
    }

    try {
        res.clearCookie("userAuth", {
            httpOnly: true,
        })
        res.status(200).json({ message: "User logout successful", isLoggedIn: false })
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = { createUser, loginUser, logoutUser, userAuth }
