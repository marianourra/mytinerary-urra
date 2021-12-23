const Itinerary = require("../models/Itinerary.js")
const User = require("../models/User.js")

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
            Itinerary.find({city: req.params.id})
            .then((itineraries) => res.json({ response: itineraries }))
            .catch(err => console.log(err))
        },
        
        likeItinerary:(req,res) =>{
            Itinerary.findOne({_id: req.params.id})
            .then((itinerary) =>{
                if(itinerary.likes.includes(req.user._id)){
                   Itinerary.findOneAndUpdate({_id:req.params.id}, {$pull:{likes:req.user.id}},{new:true})
                   .then((newItinerary)=> res.json({success:true, response:newItinerary.likes}))
                   .catch((error) => console.log(error))
                }else{
                    Itinerary.findOneAndUpdate({_id: req.params.id}, {$push:{likes:req.user.id}},{new:true})
                    .then((newItinerary) => res.json({success:true, response:newItinerary.likes}))
                    .catch((error) => console.log(error))
                }
            })
            .catch((error) => res.json({success:false, response:error}))
        },

        getAllComments: async(req, res)=>{
            try {
               const itineraryId = req.params.id
               var itinerarySelected = await Itinerary.findOne({_id:itineraryId})
            }catch(err){
               console.log('getAllComments catch: ', err)
            }
            res.json({response: itinerarySelected.comments})
        },
        addNewComment: async(req, res)=>{
           console.log("llegue hasta addnewcomment")
            try {
                var {userId, comment, itineraryId } = req.body
                var userInfo = await User.findOne({_id: userId})
                var itineraryCommented = await Itinerary.findOneAndUpdate(
                    {_id: itineraryId},
                    {$push: {comments: {userId, userName: userInfo.name, userImg: userInfo.image_url, comment}}}, 
                    {new: true}
                ) 
            }catch (err){
                console.log('addNewComment catch: ', err)
            }
            res.json({response: itineraryCommented.comments})
        },
        editComment: async(req, res)=>{
            console.log("edit commet: ", req.body)
            try {
                const itineraryId = req.params.id
                const commentId = req.body.commentId
                const newComment = req.body.newComment
                var itineraryModified = await Itinerary.findOneAndUpdate( 
                    {_id: itineraryId, "comments.userId": commentId},  
                    {$set: {"comments.$.comment": newComment}},            
                    {new: true}
                )
                console.log(" itineraryModified: ",itineraryModified)
            }catch(err){
                console.log('editComment catch: ', err)
            }
            res.json({response: itineraryModified.comments})
        },
        deleteComment: async(req, res)=>{
            console.log("delete req body: ", req.body)
            try {
                const itineraryId = req.body.itineraryId
                const commentId = req.body.commentId
                var itineraryModified = await Itinerary.findOneAndUpdate(
                    {_id: itineraryId},
                    {$pull: {comments: {_id: commentId}}}, 
                    {new: true}
                ) 
    
            }catch(err){
                console.log('deleteComment catch: ', err)
            }
            res.json({response: itineraryModified.comments})
        }  
    


}


module.exports = itinerariesControllers

