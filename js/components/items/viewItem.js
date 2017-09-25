import React, {Component} from "react";

import convert_ISO_to_date from "../../utils/dateUtil"
import CommonModal from "../commonModal"
import UpdateItem from "./updateItem"

class ViewItem extends Component {

    show_complete_by_date() {
        return convert_ISO_to_date(this.props.item_details.item.complete_by)
    }

    render() {
        return (
            <div className="item">

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3>{this.props.bucket_name},</h3>
                        <p>I want to {this.props.item_details.item.item_name}</p>
                    </div>
                    <div className="panel-body">
                        Complete By this by {this.show_complete_by_date()}

                        <div className="row">
                            <div className="form-group">

                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-lg-10">

                                <button className="btn btn-primary" onClick={this.props.updateItemModal}>Update Item</button>

                                <button className="btn btn-danger">Remove Item</button>
                            </div>
                        </div>
                    </div>
                </div>

                <CommonModal show={this.props.modal_state}
                             style={{width:'300px', height:'300px'}}
                             onClose={this.props.updateItemModal}>

                    <UpdateItem item={this.props.item_details}
                                onChangeItem={this.props.onChangeItemName}
                                updateItem={this.props.updateItemName}
                    />
                </CommonModal>
            </div>
        )
    }

}

export default ViewItem