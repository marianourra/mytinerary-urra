const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

require('dotenv').config() 
const Router = require("./routes/routes") 


// app.get("/api/cities",(req, res) => {
//     res.json({response:{cities}})
//     })

app.use('/api', Router)


app.listen(4000, () => {console.log("Server is listening on port 4000")})