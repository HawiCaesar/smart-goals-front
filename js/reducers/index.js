import { combineReducers } from "redux";
import { loadingBarReducer } from 'react-redux-loading-bar'

import AuthReducer from "./authReducer"
import Bucketlists from "./bucketlistsReducer"
import Item from "./itemReducer"

import User from "./userReducer"
import { loadingBarReducer } from 'react-redux-loading-bar'

const allReducers = combineReducers({

    authenticate: AuthReducer,
    bucketlists: Bucketlists,
    item: Item,
    user: User,
    loadingBar: loadingBarReducer,
});


export default allReducers;