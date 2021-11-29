require('dotenv').config() 
const express = require("express")
const cors = require("cors")
require("./config/database")
const app = express()
app.use(cors())

const Router = require("./routes/routes") 

app.use(express.json())
// app.get("/api/cities",(req, res) => {
//     res.json({response:{cities}})
//     })

app.use('/api', Router)


app.listen(4000, () => {console.log("Server is listening on port 4000")})