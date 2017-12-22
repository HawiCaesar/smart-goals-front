import axios from "axios"
import * as utils from "../utils/tokenUtilities"

export function loginUser(userData){

    return (dispatch) => {
        dispatch(LoginRequest());

        return axios.post(process.env.API_LOCAL_URL+"/v1/api/auth/login",
            userData)
            .then((response) => {
                dispatch(LoginSuccess(response))
            }, (err) => {
                dispatch(LoginFailed(err))
            })
            .catch((err) => dispatch(LoginFailed(err)))

    }
}

function LoginRequest(){
    return {
        type: "TRY_LOGIN"
    }
}

function LoginSuccess(response){
    return {
        type: "LOGIN_RESULTS",
        payload: response.data
    }
}


function LoginFailed(error){

    return{
        type: "LOGIN_REJECTED",
        payload: error
    }
}

export function logoutUser(){

    return function(dispatch){

        dispatch({type: "LOGOUT"});
        utils.removeAuthToken();
    }

}