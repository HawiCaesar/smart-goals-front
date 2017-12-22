import axios from "axios"

export function registerUser(userData){

    return function(dispatch){
        dispatch({type: "REGISTERING_USER"});

        axios.post(process.env.API_LOCAL_URL+"/v1/api/auth/register",
            userData)
            .then((response) => {
                dispatch({type: "USER_REGISTERED", payload: response.data})

            })
            .catch((err) => {
                dispatch({type: "REGISTRATION_FAILED", payload: err})
            })
    }
}
