import { combineReducers } from "redux";

import AuthReducer from "./authReducer"
import Bucketlists from "./bucketlistsReducer"
import { loadingBarReducer } from 'react-redux-loading-bar'

const allReducers = combineReducers({

    authenticate: AuthReducer,
    bucketlists: Bucketlists,
    loadingBar: loadingBarReducer,
});


export default allReducers;