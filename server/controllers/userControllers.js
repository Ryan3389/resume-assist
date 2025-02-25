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

        if (token) {
            res.status(200).json({ authenticated: true })
        } else {
            res.status(200).json({ authenticated: false })
        }


    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = { createUser }
