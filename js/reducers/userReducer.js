export default function (state = {
    registering: false,
    registered: false,
    exists: false,
    message: null,
    message_dialogue: "",
}, action) {

    switch (action.type) {
        case "REGISTERING_USER": {
            return Object.assign({}, state, {
                registering: true
            });
        }
        case "USER_REGISTERED": {
            return Object.assign({}, state, {
                registering: false,
                registered: true,
                message: action.payload.message,
                message_dialogue: "alert alert-success"
            });
        }
        case "REGISTRATION_FAILED": {
            return Object.assign({}, state, {
                registering: false,
                registered: false,
                message: action.payload.response.data.message,
                message_dialogue: "alert alert-danger"
            });
        }
    }
    return state;
}