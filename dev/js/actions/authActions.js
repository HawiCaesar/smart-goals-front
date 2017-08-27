import axios from "axios"

export function loginUser(){

    return function(dispatch){
        dispatch({type: "TRY_LOGIN"});

        let config = {
            headers: {"Access-Control-Allow-Origin": "*"}
        };

        axios.post("https://demo-smart-goals-api.herokuapp.com/v1/api/auth/login",
            {"email": "abc@example.com", "password": "123456"}, config)
            .then((response) => {
                dispatch({type: "LOGIN_RESULTS", payload: response.data})

            })
            .catch((err) => {
                dispatch({type: "LOGIN_REJECTED", payload: err})
            })
    }
}