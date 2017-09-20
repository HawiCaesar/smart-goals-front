import React, { Component } from "react";

class ViewItem extends Component{

    render(){
        return (
            <div className="item">

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3>{this.props.bucket_name},</h3>
                        <p>I want to {this.props.item_details.item.item_name}</p>
                    </div>
                    <div className="panel-body">
                        Complete By this by {this.props.item_details.item.complete_by}

                        <div className="row">
                            <div className="form-group">

                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-lg-10">
                                <button className="btn btn-success">Done With This</button>

                                <button className="btn btn-primary">Update Item</button>

                                <button className="btn btn-danger">Remove Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ViewItem