import axios from "axios"
import * as utils from "../utils/tokenUtilities"

export function loginUser(userData){

    return function(dispatch){
        dispatch({type: "TRY_LOGIN"});

        axios.post(process.env.API_LOCAL_URL+"/v1/api/auth/login",
            userData)
            .then((response) => {
                dispatch({type: "LOGIN_RESULTS", payload: response.data})

            })
            .catch((err) => {
                dispatch({type: "LOGIN_REJECTED", payload: err})
            })
    }
}

export function emailChanged(email){

    return function(dispatch) {
        dispatch({type: "EMAIL_CHANGED", payload: email})
    }
}

export function logoutUser(){

    return function(dispatch){

        dispatch({type: "LOGOUT"});
        utils.removeAuthToken();
    }

}