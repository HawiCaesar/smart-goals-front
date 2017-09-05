export default function(state={
    fetching: false,
    bucketlists: []
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
    }

    return state;
}