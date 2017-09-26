import * as utils from "../utils/tokenUtilities"

export default function (state = {
    user_logged_in: false,
    login_error: false,
    error: null,
    logging_in: false,
    results: [],
    token: "",
    email: ""
}, action) {

    switch (action.type) {
        case "TRY_LOGIN": {

            return Object.assign({}, state, {
                logging_in: true,
                login_error: false,
                error: false,
                user_logged_in: false,
                results: [],
                token: ""
            });

        }
        case "LOGIN_RESULTS": {

            utils.setAuthToken(action.payload['access_token']);

            return Object.assign({}, state, {
                login_error: false,
                error: false,
                user_logged_in: true,
                logging_in: false,
                results: action.payload,
                token: action.payload['access_token']
            })

        }
        case "LOGIN_REJECTED": {
            return Object.assign({}, state, {
                user_logged_in: false,
                login_error: true,
                error: action.payload.response.data.message,
                logging_in: false,
                results: [],
                token: ""
            })

        }
        case "LOGOUT": {
            return Object.assign({}, state, {
                user_logged_in: false,
                login_error: false,
                error: false,
                logging_in: false,
                results: [],
                token: ""
            })
        }

        case "EMAIL_CHANGED": {
            return Object.assign({}, state, {
                email: action.payload
            })
        }

    }
    return state;

}