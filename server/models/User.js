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
        match: [/.+@.+\..+/, 'Must match an email address'],
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
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
    await bcrypt.compare(password, this.password)

}

const User = model("User", userSchema)

module.exports = User