import React from "react";
import LoadingBar from 'react-redux-loading-bar'

import CommonModal from "../commonModal"
import NoBucketlists from "./noBucketlists"
import ViewItems from "../viewItems"
import UpdateBucketlist from "./updateBucketlist"
import AddBucketlist from "./addBucketlist"

class Bucketlists extends React.Component {

    componentWillReceiveProps(nextProps) {

    }

    show_bucketlist(){

        if(this.props.bucketlists.bucketlists.results.length < 1) {
            return <NoBucketlists/>
        }

            return this.props.bucketlists.bucketlists.results.map((bucket) => {
                return (
                    <div className="col-md-4" key={bucket.id}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">{bucket.name}</h3>
                            </div>
                            <div className="panel-body">

                                <a href="#" className="btn btn-primary btn-sm" data-id={bucket.id}
                                   onClick={this.props.updateBucketlistModal}>Update Bucketlist</a>|

                                <a href="#" className="btn btn-danger btn-sm" data-id={bucket.id}
                                   onClick={this.props.deleteBucketlistModal}>Delete Bucketlist</a>
                                <hr/>

                                <p>You have {bucket.items.length} items in this bucketlist</p>

                                <a href="#" className="btn btn-primary btn-sm" data-id={bucket.id}
                                   onClick={this.props.viewItemsModal}>View Items</a>|

                                <a href="#" className="btn btn-primary btn-sm" data-id={bucket.id}>Add Item</a>
                        </div>
                    </div>
                </div>
            )
        });

    };

    render(){

        return(
            <div className="bucketlists">
                <div className="row first-row">
                    <a href="#" className="btn btn-primary btn-md"
                    onClick={this.props.addBucketlistModal}>Add Bucketlist</a>
                    <h3>My Bucketlists (Total: {this.props.bucketlists.bucketlists_count})</h3>
                </div>
                <div className="row">

                        {(!this.props.bucketlists.bucketlists.results)? <LoadingBar/>: this.show_bucketlist()}
                </div>


                <CommonModal show={this.props.modal_state}
                       style={{width:'300px', height:'300px'}}
                       onClose={this.props.viewItemsModal}>

                    <ViewItems id={this.props.bucketlist_id}
                               buckets={this.props.bucketlists.bucketlists}
                               viewBucketlistItem={this.props.viewBucketlistItem}
                    />

                </CommonModal>

                <CommonModal show={this.props.update_modal_state}
                             style={{width:'300px', height:'300px'}}
                             onClose={this.props.updateBucketlistModal}>

                    <UpdateBucketlist id={this.props.bucketlist_id}
                                      buckets={this.props.bucketlists.bucketlists}
                                      onChangeBucketlistName = { this.props.onChangeBucketlistName }
                                      onUpdateBucketlist = { this.props.onUpdateBucketlist } />
                </CommonModal>

                <CommonModal show={this.props.add_modal_state}
                             style={{width:'300px', height:'300px'}}
                             onClose={this.props.addBucketlistModal}>

                    <AddBucketlist
                                      onAddBucketlistName = { this.props.onAddBucketlistName }
                                      onCreateBucketlist = { this.props.onCreateBucketlist }
                                      messages = { this.props.bucketlists.add_bucket_message}
                    />
                </CommonModal>
            </div>
        )
    }
}


Bucketlists.propTypes = {

    bucketlists: React.PropTypes.object.isRequired,
    modal_state: React.PropTypes.bool.isRequired,
    update_modal_state: React.PropTypes.bool.isRequired,
    add_modal_state: React.PropTypes.bool.isRequired
}
export default Bucketlists