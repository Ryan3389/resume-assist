const jwt = require("jsonwebtoken")

const secret = 'secret'
const expiration = '1h'

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