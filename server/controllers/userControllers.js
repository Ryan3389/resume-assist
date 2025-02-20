const User = require('../models/User')
const { signToken } = require('../utils/auth')

async function createUser(req, res) {
    try {
        const { firstName, lastName, email, password } = req.body
        const user = await User.create({ firstName, lastName, email, password })

        const token = signToken(user)
        return res.status(200).json({ createdUser: user, idToken: token })

    } catch (error) {
        res.status(500).json(error)
    }
}


// async function submitResume(req, res) {
//     try {
//         res.status(200).json({ message: 'resume added successfully' })
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }
module.exports = { createUser }