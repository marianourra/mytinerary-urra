require('dotenv').config() 
const express = require("express")
const cors = require("cors")
const passport = require("passport")
require("./config/database")
const app = express()
app.use(cors())
require("./config/passport")

const Router = require("./routes/routes") 

app.use(express.json())
// app.get("/api/cities",(req, res) => {
//     res.json({response:{cities}})
//     })

app.use(passport.initialize())

app.use('/api', Router)


app.listen(4000, () => {console.log("Server is listening on port 4000")})