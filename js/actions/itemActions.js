import ItemsService from "../services/itemsService"

export function get_item(bucket, item){

    return function(dispatch){
        dispatch({type: "FETCH_SPECIFIC_ITEM"});

        ItemsService.get(`/v1/api/bucketlists/${bucket}/items/${item}`, (status, data) =>
            dispatch({type: "ITEM_RESULTS", payload: data })).catch((error) => {

            dispatch({type: "FAILED_FETCHING_ITEM", payload: error })
        });

    }
}

export function update_item(bucket, item, item_data){

    return function(dispatch){

        ItemsService.put(`/v1/api/bucketlists/${bucket}/items/${item}`, item_data, (status, data) =>
            dispatch({type: "UPDATED_RESULTS", payload: data })).catch((error) => {

            dispatch({type: "FAILED_UPDATE_ITEM", payload: error })
        });

    }
}

export function delete_item(bucket, item){

    return function(dispatch){
        dispatch({type: "DELETE_ITEM"});

        ItemsService.delete(`/v1/api/bucketlists/${bucket}/items/${item}`, (status, data) =>
            dispatch({type: "DELETE_RESULTS", payload: data })).catch((error) => {

            dispatch({type: "FAILED_UPDATE_ITEM", payload: error })
        });

    }
}