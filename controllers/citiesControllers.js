const cities=[
    {
     id: 1,   
     city: "Bangkok",
     country: "Thailand",
     image: "./assets/bangkok.jpg",
    },{
     id: 2,
     city: "Buenos Aires",
     country: "Argentina",
     image: "./assets/bsas.jpg",
    },{
     id: 3,
     city: "Dubai",
     country: "UAE",
     image: "./assets/dubai.jpg",
    },{
     id: 4,   
     city: "Istambul",
     country: "Turkey",
     image: "./assets/estambul.jpg",
    },{
     id: 5,
     city: "Hong Kong",
     country: "China",
     image: "./assets/hongkong.jpg",
    },{
     id: 6,
     city: "Kuala Lumpur",
     country: "Malasia",
     image: "./assets/kuala.jpg",
    },{
     id: 7,
     city: "Rio de Janeiro",
     country: "Brazil",
     image: "./assets/rio.jpg",
    },{
     id: 8,
     city: "London",
     country: "UK",
     image: "./assets/london.jpg",
    },{
     id: 9,
     city: "Macao",
     country: "China",
     image: "./assets/macao.jpg",
    },{
     id: 10,
     city: "New York",
     country: "USA",
     image: "./assets/ny.jpg",
    },{
     id: 11,
     city: "Paris",
     country: "France",
     image: "./assets/paris.jpg",
    },{
     id: 12,
     city: "Singapur",
     country: "Singapur",
     image: "./assets/singapur.jpg",
    },{
     id: 13,
     city: "Tulum",
     country: "Mexico",
     image: "./assets/tulum.jpg",
    },{
     id: 14,
     city: "Miami",
     country: "USA",
     image: "./assets/miami.jpg",
    },{
     id: 15,
     city: "Mar del Plata",
     country: "Argentina",
     image: "./assets/mardel.jpg",
    }
    
    ]

const citiesControllers = {
    getCities: (req, res) => {
        res.json({response:{cities}})
        },

    getOneCity: async(req, res) => {
              let city
              const id = req.params.id        
              try{
                  city = await City.findOne({_id:id})
              }catch(error){
                  console.log(error)
              }
              res.json({response:city})
    },

    addCity: (req, res) => {
        const {cityName, country, image} = req.body
        
        new City({cityName, country, image}).save()
        .then(() => res.json({success: true}))
    },

    deleteCity: async (req, res) => {
      let city
      const id = req.params.id
      try {
        city = await City.findOneAndDelete({ _id: id })
      } catch(error) {
        console.log(error)
      }
      res.json({response: city})
    },

    modifyCity: async(req, res) => {
    let id = req.params.id
    let city = req.body
    let actualizado
    console.log(city)
    try{
        actualizado = await City.findOneAndUpdate({_id:id},city,{new:true})
        console.log(actualizado)
    }catch(error){
        console.log(error)
    }
    res.json({success:actualizado ? true : false})
    } 


}



module.exports = citiesControllers