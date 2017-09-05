import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { get_bucketlists, update_bucketlist } from "../actions/bucketlistsActions";
import Bucketlists from "../components/bucketlists/bucketlists"
import * as utils from "../utils/tokenUtilities"


class BucketlistsContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = { isOpen: false, isOpen_update: false, bucket: 0, bucket_details:{}};
    }


    componentWillMount() {

        this.props.get_bucketlists(utils.getAuthToken())
    }

    viewItemsModal(event){
        let bucketlist_id = event.currentTarget.getAttribute('data-id');
        this.setState({
            isOpen: !this.state.isOpen,
            bucket: bucketlist_id
        });
    }

    updateBucketlistModal(event){

        let bucketlist_id = event.currentTarget.getAttribute('data-id');

        this.setState({
            isOpen_update: !this.state.isOpen_update,
            bucket: bucketlist_id
        });
    }
    onUpdateBucketlist(bucket_id){

        this.props.update_bucketlist(bucket_id, this.state.bucket_details)
        this.setState({
            isOpen_update: !this.state.isOpen_update
        })

    }
    onChangeBucketlistName(event){
        this.setState({bucket_details: event.target.value})
        console.log(this.state.bucket_details)
    }

    deleteBucketlistModal(event){

        let bucketlist_id = event.currentTarget.getAttribute('data-id');

        // make delete action and reducer to update store and force refresh
    }

    render() {
        return (
            <Bucketlists bucketlists={ this.props.bucketlists_details }
                         modal_state={ this.state.isOpen }
                         update_modal_state={ this.state.isOpen_update }
                         bucketlist_id = { this.state.bucket }
                         viewItemsModal={ this.viewItemsModal.bind(this) }
                         updateBucketlistModal={ this.updateBucketlistModal.bind(this) }
                         deleteBucketlistModal={ this.deleteBucketlistModal.bind(this) }
                         onUpdateBucketlist = { this.onUpdateBucketlist.bind(this)}
                         onChangeBucketlistName = { this.onChangeBucketlistName.bind(this) }
            />
        );
    }

}

function mapStateToProps(state) {
    return {
        bucketlists_details: state.bucketlists,

    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({get_bucketlists: get_bucketlists, update_bucketlist: update_bucketlist}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(BucketlistsContainer)



