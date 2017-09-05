import axios from "axios"
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import * as utils from "../utils/tokenUtilities"

export function get_bucketlists(token){

    let headers = { "Authorization": "Bearer "+ token +"", "Content-Type": "application/json" }

    const service = axios.create({
        baseURL: 'http://localhost:5000/',

    });

    return function(dispatch) {
        dispatch({type: "FETCH_BUCKETLISTS"});
        dispatch(showLoading())

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

export function update_bucketlist(bucket_id, data){
    let token = utils.getAuthToken()
    let headers = { "Authorization": "Bearer "+ token +"", "Content-Type": "application/json" }

    const service = axios.create({
        baseURL: 'http://localhost:5000/',

    });

    return function(dispatch) {
        dispatch({type: "UPDATE_BUCKETLIST"});

        return service.request({
            method: 'PUT',
            url:'v1/api/bucketlists/'+bucket_id,
            headers: headers,
            data: {"name": data }
        }).then(function(response) {

            dispatch({ type: "UPDATE_RESULT", payload: response.data, bucket_id: parseInt(bucket_id), new_bucket_name: data })

        }).catch((err) => {

            dispatch({type: "UPDATE_FAILED", payload: err})
        })

    }
}
export function delete_bucketlist(bucket_id){

    let token = utils.getAuthToken()
    let headers = { "Authorization": "Bearer "+ token +"", "Content-Type": "application/json" }

    const service = axios.create({
        baseURL: 'http://localhost:5000/',

    });

    return function(dispatch) {
        dispatch({type: "DELETING_BUCKETLIST"});

        return service.request({
            method: 'DELETE',
            url:'v1/api/bucketlists/'+bucket_id,
            headers: headers,
            data: {"name": data }
        }).then(function(response) {

            dispatch({ type: "DELETE_RESULT", payload: response.data, bucket_id: parseInt(bucket_id)})

        }).catch((err) => {

            dispatch({type: "DELETE_FAILED", payload: err})
        })

    }
}