import { combineReducers } from "redux";

import userReducer from "./userReducer";
import ActiveReducer from "./activeUserReducer"
import AuthReducer from "./authReducer"

const allReducers = combineReducers({
    users: userReducer,
    activeUser: ActiveReducer,
    authenticate: AuthReducer
});


export default allReducers;