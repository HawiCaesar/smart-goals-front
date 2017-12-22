import { showLoading, hideLoading } from 'react-redux-loading-bar'
import BucketlistService from "../services/bucketlistsService"

export function get_bucketlists(){

    return function(dispatch) {
        dispatch({type: "FETCH_BUCKETLISTS"});
        dispatch(showLoading())

        return BucketlistService.get(`/v1/api/bucketlists/`)
            .then((response) =>{
                dispatch({type: "BUCKETLISTS_RESULTS", payload: response.data })
            })
            .catch((error) => {
                dispatch({type: "FAILED_FETCHING_BUCKETLISTS", payload: error })
            });

    }
}

export function update_bucketlist(bucket_id, updated_data){

    return function(dispatch){
        dispatch({type: "UPDATE_BUCKETLIST"});

        BucketlistService.put(`/v1/api/bucketlists/${bucket_id}`, updated_data,(status, data) =>
            dispatch({type: "UPDATE_RESULT", payload: data, bucket_id: parseInt(bucket_id),
                      new_bucket_name: updated_data })).catch((error) => {

            dispatch({type: "UPDATE_FAILED", payload: error })
        });
    }
}
export function delete_bucketlist(bucket_id){

    return function(dispatch) {
        BucketlistService.delete_service(`/v1/api/bucketlists/${bucket_id}`, (status, data) =>
            dispatch({type: "DELETING BUCKETLIST", payload: data, bucket_id: parseInt(bucket_id) })).catch((error) => {

            dispatch({type: "DELETE FAILED", payload: error })
        });
    }
}

export function add_bucketlist(new_bucket){
    return function(dispatch){
        BucketlistService.post(`/v1/api/bucketlists/`, new_bucket,(status, data) =>
            dispatch({type: "BUCKETLIST_CREATION", payload: data, })).catch((error) => {

            dispatch({type: "CREATION_FAILED", payload: error })
        });
    }
}

export function dismiss_modal_message_add(){
    return function(dispatch){
        dispatch({ type: "REMOVE_MODAL_MESSAGES_ADD"})
    }
}