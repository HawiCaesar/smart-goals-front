import React from "react";

class UpdateBucketlist extends React.Component {


    show_message_status(){

        if(this.props.messages){

            if(this.props.messages.status === "Fail"){
                return(<p className="alert alert-danger">{this.props.messages.message}</p>)
            }

            return(<p className="alert alert-info">{this.props.messages.message}</p>)

        }

    }

    getBucket(buckets, id) {
        return Object.assign({}, buckets.find(bucket => bucket.id == id));

    }

    showBucket(){
        let bucket_detail = this.getBucket(this.props.buckets.results, this.props.id)

        return (
            <div>
                <input className="form-control" type="text" defaultValue={bucket_detail.name} name="update_bucket"
                       onChange={this.props.onChangeBucketlistName} />
                <div className="spacer"></div>

            </div>
        )

    }

    render() {
        return (
            <div>
                <h3>Update Bucketlist</h3>

                    <div className="row">
                        {this.show_message_status()}
                    </div>

                    {this.showBucket()}

                    <button className="btn btn-primary btn-sm"
                            onClick={()=> this.props.onUpdateBucketlist(this.props.id) }>Update</button>
                    <div className="spacer"></div>
            </div>
        )
    }
}

export default UpdateBucketlist