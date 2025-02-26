// const express = require('express')
// const app = express()
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

        res.status(200).json('Success')


    } catch (error) {
        res.status(500).json(error.message)
    }
}


async function loginUser(req, res) {
    try {
        const { email, password } = req.body


        const user = await User.findOne({ email })

        if (!user) {

            return res.status(404).json({ errorMessage: 'Incorrect Credentials' })
        }


        const passwordCheck = await user.isCorrectPassword(password)

        if (!passwordCheck) {

            return res.status(404).json({ errorMessage: 'Incorrect Credentials' })
        }

        const token = signToken(user)

        res.cookie('userAuth', token, {
            secure: process.env.NODE_ENV === 'development',
            httpOnly: true,
        })



        res.status(200).json('success')


    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}

async function userAuth(req, res) {
    const token = req.cookies.userAuth

    if (!token) {
        res.status(401).json({ isLoggedIn: false, isVerified: false })
    }

    try {
        const verified = jwt.verify(token, "secret")
        if (!verified) {
            return res.status(400).json({ isLoggedIn: false, isVerified: false })
        }
        res.status(200).json({ isLoggedIn: true, isVerified: true })
    } catch (error) {
        res.status(500).json(error)
    }

}


module.exports = { createUser, loginUser, userAuth }
