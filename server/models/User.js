const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Enter a valid email address'],
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [5, "Password must be at least 5 characters in length"],
    },
    resume: {
        type: String
    }
})

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next()
})

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password)

}

const User = model("User", userSchema)

module.exports = User