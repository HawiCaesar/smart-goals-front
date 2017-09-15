import { combineReducers } from "redux";
import { loadingBarReducer } from 'react-redux-loading-bar'

import AuthReducer from "./authReducer"
import Bucketlists from "./bucketlistsReducer"
import Item from "./itemReducer"


const allReducers = combineReducers({

    authenticate: AuthReducer,
    bucketlists: Bucketlists,
    item: Item,
    loadingBar: loadingBarReducer,
});


export default allReducers;