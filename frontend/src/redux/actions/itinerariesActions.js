import axios from "axios"

const itinerariesActions = {
   getItinerariesByCity: (id) => {
        return async (dispatch) => {
        let response = await axios.get('http://localhost:4000/api/itineraries/city/' + id) 
           let infoItinerary = response.data.response
           console.log(infoItinerary)
           dispatch({ type: 'ONE_ITINERARY', payload: infoItinerary })        
        }
     }
}

export default itinerariesActions