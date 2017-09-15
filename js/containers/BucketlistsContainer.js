import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";

import {
    get_bucketlists,
    update_bucketlist,
    delete_bucketlist,
    add_bucketlist,
    dismiss_modal_message_add
} from "../actions/bucketlistsActions";
import Bucketlists from "../components/bucketlists/bucketlists"


class BucketlistsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isOpen_update: false,
            isOpen_add: false,
            bucket: 0,
            add_bucket_details: {},
            update_bucket_details: {},
            showingAlert: false
        };
    }


    componentWillMount() {

        this.props.get_bucketlists()
    }

    viewItemsModal(event) {
        let bucketlist_id = event.currentTarget.getAttribute('data-id');
        this.setState({
            isOpen: !this.state.isOpen,
            bucket: bucketlist_id
        });
    }

    addBucketlistModal() {
        this.setState({
            isOpen_add: !this.state.isOpen_add
        })

        this.props.dismiss_modal_message_add()
    }

    onAddBucketlistName(event) {
        this.setState({add_bucket_details: event.target.value})
    }

    onCreateBucketlist() {
        this.props.add_bucketlist(this.state.add_bucket_details)

        setTimeout(function () {

            this.setState({isOpen_add: false});
            //this.componentWillMount()

        }.bind(this), 1000);

    }

    updateBucketlistModal(event) {

        let bucketlist_id = event.currentTarget.getAttribute('data-id');

        this.setState({
            isOpen_update: !this.state.isOpen_update,
            bucket: bucketlist_id
        });
    }

    onUpdateBucketlist(bucket_id) {

        this.props.update_bucketlist(bucket_id, this.state.update_bucket_details)
        this.setState({
            isOpen_update: !this.state.isOpen_update
        })

    }

    onChangeBucketlistName(event) {
        this.setState({update_bucket_details: event.target.value})
    }

    deleteBucketlistModal(event) {

        let bucketlist_id = event.currentTarget.getAttribute('data-id');

        this.props.delete_bucketlist(bucketlist_id)

        this.componentWillMount()

    }

    viewBucketlistItem(event){

        this.context.router.history.push({
            pathname: '/bucketlist-items',
            state: {
                bucket_id: event.currentTarget.getAttribute('data-id'),
                item_id: event.currentTarget.getAttribute('data-item-id'),
                bucket_name: event.currentTarget.getAttribute('data-bucket-name')
            }
        });

    }

    render() {
        return (
            <Bucketlists bucketlists={this.props.bucketlists_details}
                         modal_state={this.state.isOpen}
                         update_modal_state={this.state.isOpen_update}
                         add_modal_state={this.state.isOpen_add}
                         bucketlist_id={this.state.bucket}
                         viewItemsModal={this.viewItemsModal.bind(this)}
                         addBucketlistModal={this.addBucketlistModal.bind(this)}
                         updateBucketlistModal={this.updateBucketlistModal.bind(this)}
                         deleteBucketlistModal={this.deleteBucketlistModal.bind(this)}
                         onUpdateBucketlist={this.onUpdateBucketlist.bind(this)}
                         onChangeBucketlistName={this.onChangeBucketlistName.bind(this)}
                         onAddBucketlistName={this.onAddBucketlistName.bind(this)}
                         onCreateBucketlist={this.onCreateBucketlist.bind(this)}
                         viewBucketlistItem={this.viewBucketlistItem.bind(this)}

            />
        );
    }

}

function mapStateToProps(state) {
    return {
        bucketlists_details: state.bucketlists

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            get_bucketlists: get_bucketlists,
            add_bucketlist: add_bucketlist,
            update_bucketlist: update_bucketlist,
            delete_bucketlist: delete_bucketlist,
            dismiss_modal_message_add: dismiss_modal_message_add
        }, dispatch)

}

BucketlistsContainer.contextTypes = {
    router: React.PropTypes.object
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BucketlistsContainer))



