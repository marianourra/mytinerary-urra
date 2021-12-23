import axios from "axios"

const itinerariesActions = {

   likeItinerary: (id, token) =>{
      return async () => {
              try{
                  const response = await axios.put(`http://localhost:4000/api/itinerary/like/${id}`, {},{
                      headers:{
                          Authorization: `Bearer ${token}`
                      }
                  })
                  return response
              } catch(error) {
                  console.error(error)
              }
      }
  },

   getItinerariesByCity: (id) => {
        return async (dispatch) => {
        let response = await axios.get('http://localhost:4000/api/itineraries/city/' + id) 
           let infoItinerary = response.data.response
           console.log(infoItinerary)
           dispatch({ type: 'ONE_ITINERARY', payload: infoItinerary })        
        }
     },

     sendComment: (commentInfo)=>{
        return async() => {
            const response = await axios.post('http://localhost:4000/api/itinerary/comments', commentInfo)
            return response
        }
    },
    deleteComment: (IDs)=> {
        return async() => {
            const response = await axios.delete('http://localhost:4000/api/itinerary/comments', {data: IDs}) 
            return response.data.response
        }
    },
    editComment: (itineraryId, commentInfo)=> {
        return async() => {
            const response = await axios.put('http://localhost:4000/api/itinerary/comments/' + itineraryId, commentInfo )
            return response.data.response
        }
    }
}

export default itinerariesActions