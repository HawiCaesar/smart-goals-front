export default function(state={
    fetching: false,
    bucketlists: [],
    edit: false,
    edit_response: null
}, action) {

    switch (action.type) {
        case "FETCH_BUCKETLISTS": {
            return Object.assign({}, state,{
                fetching: true,
                bucketlists: []
            });
        }
        case "BUCKETLISTS_RESULTS": {

            return Object.assign({}, state,{
                fetching: false,
                bucketlists: action.payload
            });
        }
        case "FAILED_FETCHING_BUCKETLISTS":{
            return Object.assign({}, state,{
                fetching: false,
                bucketlists: []
            });
        }
        case "UPDATE_BUCKETLIST":{
            return Object.assign({}, state,{
                edit: true,
                edit_response: null
            });
        }
        case "UPDATE_RESULT": {

            let bucketlist = state.bucketlists.results.find(bucket => bucket.id === action.bucket_id)

            bucketlist.name = action.new_bucket_name

            return Object.assign({}, state,{
                edit: false,
                edit_response: action.payload

            });
        }
        case "UPDATE_FAILED":{
            return Object.assign({}, state,{
                edit: true,
                edit_response: action.payload.response
            });
        }
    }

    return state;
}