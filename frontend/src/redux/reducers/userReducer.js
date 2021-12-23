const userReducer = (state = { name: null, _id: null, image_url: null, token: null, user: null }, action) => {


    console.log(action)

    switch (action.type) {

        case "LOGGED":
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("name",action.payload.name)
            localStorage.setItem("image_url", action.payload.image_url)
            localStorage.setItem("_id", action.payload._id)
            return {
                ...state,
                token: action.payload.token,
                name: action.payload.name,
                image_url: action.payload.image_url,
                _id: action.payload._id,
                user: action.payload
            }

        case "LOG_OUT":
            localStorage.removeItem("token")
            localStorage.removeItem("name")
            localStorage.removeItem("image_url")
            localStorage.removeItem("_id")
            return {
                token: null,
                name: null,
                image_url: null,
                _id: null,
            }
        default:
            return (
                state
            )
    }

}

export default userReducer