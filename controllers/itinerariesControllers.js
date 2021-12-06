const Itinerary = require("../models/Itinerary.js")

const itinerariesControllers = {
    getItineraries: (req, res) => {
        Itinerary.find()
        .then((itineraries) => res.json({ response: itineraries }))
        .catch(err => console.log(err))
    },


    oneItinerary: async(req, res) => {
              let itinerary
              const id = req.params.id        
              try{
                  itinerary = await Itinerary.findOne({_id:id})
              }catch(error){
                  console.log(error)
              }
              res.json({response:itinerary})
          },
    newItinerary: (req, res) => {
              const {city, tourName, duration, price, publisherImage, publisherName, hashtags, likes } = req.body
              
              new Itinerary({city, tourName, duration, price, publisherImage, publisherName, hashtags, likes }).save()
              .then(() => res.json({success: true}))
          },
    deleteItinerary: async (req, res) => {
            let itinerary
            const id = req.params.id
            try {
              itinerary = await Itinerary.findOneAndDelete({ _id: id })
            } catch(error) {
              console.log(error)
            }
            res.json({response: itinerary})
          },

    modifiyItinerary: async(req, res) => {
        let id = req.params.id
        let city = req.body
        let actualizado
        console.log()
        try{
            actualizado = await Itinerary.findOneAndUpdate({_id:id},itinerary,{new:true})
            console.log(actualizado)
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
        },    

        getItinerariesByCity: (req, res) => {
            Itinerary.find({itinerary: req.params.id})
            .then((itineraries) => res.json({ response: itineraries }))
            .catch(err => console.log(err))
        },    
}


module.exports = itinerariesControllers
