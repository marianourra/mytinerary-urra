const cities=[
{
 city: "Bangkok",
 country: "Thailand",
 image: "./assets/bangkok.jpg",
},{
 city: "Buenos Aires",
 country: "Argentina",
 image: "./assets/bsas.jpg",
},{
 city: "Dubai",
 country: "UAE",
 image: "./assets/dubai.jpg",
},{
 city: "Istambul",
 country: "Turkey",
 image: "./assets/estambul.jpg",
},{
 city: "Hong Kong",
 country: "China",
 image: "./assets/hongkong.jpg",
},{
 city: "Kuala Lumpur",
 country: "Malasia",
 image: "./assets/kuala.jpg",
},{
 city: "Rio de Janeiro",
 country: "Brazil",
 image: "./assets/rio.jpg",
},{
 city: "London",
 country: "UK",
 image: "./assets/london.jpg",
},{
 city: "Macao",
 country: "China",
 image: "./assets/macao.jpg",
},{
 city: "New York",
 country: "USA",
 image: "./assets/ny.jpg",
},{
 city: "Paris",
 country: "France",
 image: "./assets/paris.jpg",
},{
 city: "Singapur",
 country: "Singapur",
 image: "./assets/singapur.jpg",
},{
 city: "Tulum",
 country: "Mexico",
 image: "./assets/tulum.jpg",
},{
 city: "Miami",
 country: "USA",
 image: "./assets/miami.jpg",
},{
 city: "Mar del Plata",
 country: "Argentina",
 image: "./assets/mardel.jpg",
}

]

const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())


app.get("/api/cities",(req, res) => {
    res.json({response:{cities}})
    })


app.listen(4000, () => {console.log("Server is listening on port 4000")})