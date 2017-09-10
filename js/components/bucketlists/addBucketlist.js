import React from "react";

class AddBucketlist extends React.Component {

    show_message_status(){

        if(this.props.messages){

            if(this.props.messages.status === "Fail"){
                return(<p className="alert alert-warning">{this.props.messages.message}</p>)
            }

            return(<p className="alert alert-info">{this.props.messages.message}</p>)

        }

    }

    render() {
        return (
            <div>
                <h3>Add New Bucketlist</h3>
                <div className="row">
                    {this.show_message_status()}
                </div>
                <input className="form-control" type="text" name="add_bucket"
                       onChange={this.props.onAddBucketlistName} />
                <div className="spacer"></div>
                <button className="btn btn-primary btn-sm"
                        onClick={ this.props.onCreateBucketlist }>Add</button>
                <div className="spacer"></div>
            </div>
        )
    }
}

export default AddBucketlist