import axios from "axios"
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function get_bucketlists(token){

    let headers = { "Authorization": "Bearer "+ token +"", "Content-Type": "application/json" }

    const service = axios.create({
        //baseURL: 'https://demo-smart-goals-api.herokuapp.com/',
        baseURL: 'http://localhost:5000/',

    });

    return function(dispatch) {
        dispatch({type: "FETCH_BUCKETLISTS"});
        dispatch(showLoading())

        //let token = utils.getAuthToken()

        return service.request({
            method: 'GET',
            url:'v1/api/bucketlists/',
            headers: headers,
        }).then(function(response) {

            dispatch({type: "BUCKETLISTS_RESULTS", payload: response.data})
            dispatch(hideLoading())

        }).catch((err) => {

            dispatch({type: "FAILED_FETCHING_BUCKETLISTS", payload: err})
        })

    }
}