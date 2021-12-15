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
        
    }

}   

export default userActions