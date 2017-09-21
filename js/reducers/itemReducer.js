export default function (state = {
    fetching: false,
    fetch_error_message: "",
    item: [],
    add_item_status: false,
    add_item_message: "",
    edit: false,
    edit_item_response: null,
    delete_item_bucket_status: false,
    delete_item_bucket_message: null
}, action) {

    switch (action.type) {
        case "FETCH_SPECIFIC_ITEM": {
            return Object.assign({}, state, {
                fetching: true
            });
        }
        case "ITEM_RESULTS": {

            return Object.assign({}, state, {
                fetching: false,
                item: action.payload,
            });
        }
        case "FAILED_FETCHING_ITEM": {
            return Object.assign({}, state, {
                fetching: false,
                fetch_error_message: action.payload
            });
        }
    }

    return state;
}