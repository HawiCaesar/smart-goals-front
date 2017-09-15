import { showLoading, hideLoading } from 'react-redux-loading-bar'
import ItemsService from "../services/itemsService"

export function get_item(bucket, item){

    return function(dispatch){
        dispatch({type: "FETCH_SPECIFIC_ITEM"});
        dispatch(showLoading())

        ItemsService.get(`/v1/api/bucketlists/${bucket}/items/${item}`, (status, data) =>
            dispatch({type: "ITEM_RESULTS", payload: data })).catch((error) => {

            dispatch({type: "FAILED_FETCHING_ITEM", payload: error })
        });

    }
}