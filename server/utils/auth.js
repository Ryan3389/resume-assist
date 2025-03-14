const jwt = require("jsonwebtoken")
require('dotenv').config()

const secret = process.env.SECRET
const expiration = process.env.EXPIRATION

module.exports = {
    signToken: function ({ firstName, lastName, email, _id }) {
        try {
            const payload = { firstName, lastName, email, _id }
            return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
        } catch (error) {
            console.error('JWT token error', error)
        }
    }
}