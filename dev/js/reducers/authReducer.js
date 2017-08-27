import authenticate from "./initialState"

export default function (state=authenticate, action) {

    switch (action.type) {
        case "TRY_LOGIN": {

            return Object.assign(state,{
                   logging_in: true,
                    login_error: false,
                    error: false,
                    user_logged_in: false,
                    results: [],
                    token: ""
            });

        }
        case "LOGIN_RESULTS": {

            return Object.assign(state, {
                        login_error: true,
                        error: false,
                        user_logged_in: true,
                        logging_in: false,
                        results: action.payload,
                        token: action.payload['access_token']
                    })

        }
        case "LOGIN_REJECTED": {
            return Object.assign(state, {
                        user_logged_in: false,
                        login_error: true,
                        error: action.payload.response.data.message,
                        logging_in: false,
                        results: [],
                        token: ""
                    })

        }

    }
    return state;


}