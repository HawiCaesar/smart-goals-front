export default function(state={
    fetching: false,
    bucketlists: [],
    bucketlists_count: 0,
    add_bucket_status: false,
    add_bucket_message: "",
    edit: false,
    edit_response: null,
    delete_bucket_status: false,
    delete_bucket_message: null
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
                bucketlists: action.payload,
                bucketlists_count: action.payload.count
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

        case "DELETING BUCKETLIST":{

            delete state.bucketlists.results.find(bucket => bucket.id === action.bucket_id)

            return Object.assign({}, state, {
                delete_bucket_status: true,
                bucketlists_count: state.bucketlists_count - 1
            })

        }
        case "DELETE FAILED":{

            return Object.assign({}, state, {
                delete_bucket_status: false,
                delete_bucket_message: action.payload
            })
        }
        case "BUCKETLIST_CREATION":{

            return Object.assign({}, state, {
                add_bucket_status: true,
                add_bucket_message: action.payload,
                bucketlists_count: state.bucketlists_count + 1
            })
        }

        case "CREATION_FAILED":{

            return Object.assign({}, state, {
                add_bucket_status: false,
                add_bucket_message: action.payload.response.data
            })
        }
        case "REMOVE_MODAL_MESSAGES_ADD":{

            return Object.assign({}, state, {
                add_bucket_status: false,
                add_bucket_message: ""
            })
        }

    }

    return state;
}