const User = require('../models/User')

const { signToken } = require('../utils/auth')

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


module.exports = { createUser, loginUser }
