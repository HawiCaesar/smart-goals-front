import axios from "axios"
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import * as utils from "../utils/tokenUtilities"
import BucketlistService from "../services/bucketlistsService"

export function get_bucketlists(){

    let token = utils.getAuthToken()
    let headers = { "Authorization": "Bearer "+ token +"", "Content-Type": "application/json" }

    const service = axios.create({
        baseURL: process.env.API_LOCAL_URL,

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
        baseURL: process.env.API_LOCAL_URL,

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

    return function(dispatch) {
        BucketlistService.delete_service(`/v1/api/bucketlists/${bucket_id}`, (status, data) =>
            dispatch({type: "DELETING BUCKETLIST", payload: data, bucket_id: bucket_id})).catch((error) => {

            dispatch({type: "DELETE FAILED", payload: error })
        });
    }
}

export function add_bucketlist(data){

    let token = utils.getAuthToken()
    let headers = { "Authorization": "Bearer "+ token +"", "Content-Type": "application/json" }

    const service = axios.create({
        baseURL: process.env.API_LOCAL_URL,

    });

    return function(dispatch) {

        return service.request({
            method: 'POST',
            url:'v1/api/bucketlists/',
            headers: headers,
            data: {"name": data }
        }).then(function(response) {

            dispatch({ type: "BUCKETLIST_CREATION", payload: response.data})

        }).catch((err) => {

            dispatch({type: "CREATION_FAILED", payload: err})
        })

    }
}

export function dismiss_modal_message_add(){
    return function(dispatch){
        dispatch({ type: "REMOVE_MODAL_MESSAGES_ADD"})
    }
}