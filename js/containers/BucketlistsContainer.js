import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { get_bucketlists } from "../actions/bucketlistsActions";
import Bucketlists from "../components/bucketlists"
import * as utils from "../utils/tokenUtilities"


class BucketlistsContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = { isOpen: false, bucket: 0};
    }


    componentWillMount() {

        this.props.get_bucketlists(utils.getAuthToken())
    }

    toggleModal(event){
        let bucketlist_id = event.currentTarget.getAttribute('data-id');
        this.setState({
            isOpen: !this.state.isOpen,
            bucket: bucketlist_id
        });
    }


    render() {
        return (
            <Bucketlists bucketlists={ this.props.bucketlists_details }
                         toggleModal={ this.toggleModal.bind(this) }
                         modal_state={ this.state.isOpen }
                         bucketlist_id = { this.state.bucket }
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
    return bindActionCreators({get_bucketlists: get_bucketlists}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketlistsContainer)



