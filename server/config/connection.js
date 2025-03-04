const mongoose = require('mongoose')
require("dotenv").config()

const uri = process.env.MONGO_URI

mongoose.connect(uri)
    .then(() => console.log("MongoDB conneced successfully"))
    .catch(err => console.log('MongoDB connection error: ', err))


module.exports = mongoose.connection
