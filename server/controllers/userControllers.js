const User = require('../models/User')

const { signToken } = require('../utils/auth')

async function createUser(req, res) {
    try {
        const { firstName, lastName, email, password } = req.body
        const user = await User.create({ firstName, lastName, email, password })

        const token = signToken(user)

        res.cookie('userAuth', token, {
            secure: process.env.NODE_ENV === 'development',
            httpOnly: true
        })

        res.status(200).json('Success')
        // if (token) {
        //     res.status(200).json({ authenticated: true })
        // } else {
        //     res.status(200).json({ authenticated: false })
        // }


    } catch (error) {
        res.status(500).json(error)
    }
}


async function loginUser(req, res) {
    try {
        const { email, password } = req.body
        let authenticated;

        const user = await User.findOne({ email })

        if (!user) {
            authenticated = false
            return res.status(404).json({ errorMessage: 'Incorrect Credentials', auth: authenticated })
        }


        const passwordCheck = await user.isCorrectPassword(password)

        if (!passwordCheck) {
            authenticated = false
            return res.status(404).json({ errorMessage: 'Incorrect Credentials', auth: authenticated })
        }

        const token = signToken(user)

        res.cookie('userAuth', token, {
            secure: process.env.NODE_ENV === 'development',
            httpOnly: true
        })

        authenticated = true

        res.status(200).json({ auth: authenticated })


    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}


module.exports = { createUser, loginUser }
