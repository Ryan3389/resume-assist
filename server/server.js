const express = require('express')
const routes = require("./routes")
const path = require('path')
const db = require("./config/connection")
const cookieParser = require("cookie-parser")


const app = express()
const PORT = process.env.PORT || 3001

app.use(cookieParser())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// app.use(express.static(path.join(__dirname, '../client/dist')))

app.use(routes)



// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// })


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
})