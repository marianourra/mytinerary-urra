import axios from "axios";

const userActions = {

    signUp: (newUser) => {

        return async (dispatch, getState) => {

            let response = await axios.post("http://localhost:4000/api/user/signUp", {...newUser} )
            console.log(response)
            if (response.data.success)
            {
                localStorage.setItem (
                    "token", response.data.response.token)
                dispatch({type: "LOGGED", payload: response.data.response})
            }
            return response
        }                                           
        
    },


    signIn: (signUser) => {

        return async (dispatch, getState) => {
    
            let response = await axios.post("http://localhost:4000/api/user/signIn", {...signUser} )
            if (response.data.success) {
                localStorage.setItem (
                    "token", response.data.response.token)
                    console.log(response)
                dispatch({type: "LOGGED", payload: response.data.response})
            }
            return response
        }                                           
        
    },

    logOut: () => {
        return async (dispatch, getState) => {
            dispatch({type: "LOG_OUT"})
        }
    },

    logInLS: (token) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.get("http://localhost:4000/api/tokenVerification", {
                headers: {
                    Authorization: "Bearer "+token
                }
                
                 })
                dispatch({type: "LOGGED", payload: {token, name: response.data.name, image_url: response.data.image_url, _id: response.data._id}})
            } catch (error) {
                return dispatch ({type: "LOG_OUT"})
            } 
        }
    }

}   

export default userActions