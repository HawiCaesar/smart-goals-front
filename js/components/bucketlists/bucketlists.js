import React from "react";
import LoadingBar from 'react-redux-loading-bar'

import CommonModal from "./commonModal"
import NoBucketlists from "./noBucketlists"
import ViewItems from "./viewItems"
import UpdateBucketlist from "./updateBucketlist"

class Bucketlists extends React.Component {

    componentWillReceiveProps(nextProps) {

    }

    show_bucketlist(){

        if(this.props.bucketlists.bucketlists.results.length < 1){
            return <NoBucketlists />
        }else {

            return this.props.bucketlists.bucketlists.results.map((bucket) => {
                return (
                    <div className="col-md-4" key={bucket.id}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">{bucket.name}</h3>
                            </div>
                            <div className="panel-body">
                                <a href="#" className="btn btn-primary btn-sm" data-id={bucket.id}
                                   onClick={this.props.updateBucketlistModal}>Update Bucketlist</a>

                                <a href="#" className="btn btn-danger btn-sm" data-id={bucket.id}
                                   onClick={this.props.deleteBucketlistModal}>Delete Bucketlist</a>
                                <hr/>
                                <p>You have {bucket.items.length} items in this bucketlist</p>
                                <a href="#" className="btn btn-primary btn-sm" data-id={bucket.id}
                                   onClick={this.props.viewItemsModal}>View Items</a>
                            </div>
                        </div>
                    </div>
                )
            });
        }
    };

    render(){

        return(
            <div className="bucketlists">
                <h3>My bucketlists</h3>
                <div className="row">

                        {(!this.props.bucketlists.bucketlists.results)? <LoadingBar/>: this.show_bucketlist()}
                </div>
                <CommonModal show={this.props.modal_state}
                       style={{width:'300px', height:'300px'}}
                       onClose={this.props.viewItemsModal}>
                    <ViewItems id={this.props.bucketlist_id} buckets={this.props.bucketlists.bucketlists}/>
                </CommonModal>

                <CommonModal show={this.props.update_modal_state}
                             style={{width:'300px', height:'300px'}}
                             onClose={this.props.updateBucketlistModal}>
                    <UpdateBucketlist id={this.props.bucketlist_id}
                                      buckets={this.props.bucketlists.bucketlists}
                                      onChangeBucketlistName = { this.props.onChangeBucketlistName }
                                      onUpdateBucketlist = { this.props.onUpdateBucketlist } />
                </CommonModal>
            </div>
        )
    }
}


Bucketlists.propTypes = {

    bucketlists: React.PropTypes.object.isRequired,
    modal_state: React.PropTypes.bool.isRequired,
    update_modal_state: React.PropTypes.bool.isRequired
}
export default Bucketlists