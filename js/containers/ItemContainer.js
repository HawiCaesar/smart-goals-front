import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";

import HeaderContainer from "./HeaderContainer"
import ViewItem from "../components/items/viewItem"
import { get_item, update_item } from "../actions/itemActions"


class ItemContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            updateItem_isOpen: false,
            item_id: this.props.location.state.item_id,
            bucket_name: this.props.location.state.bucket_name,
            update_item_name: {},
            item_completed: false
        }

    }

    updateItemModal(){
        this.setState({
        updateItem_isOpen: !this.state.updateItem_isOpen
        })
    }

    onChangeItemName(event) {

        this.setState({update_item_name: event.target.value});

        console.log(this.state.update_item_name)
    }

    updateItemName(){
        this.props.update_item(this.props.location.state.bucket_id, this.state.item_id,
            {item_name: this.state.update_item_name, done: "true"})
    }

    componentWillMount() {

        this.props.get_item(this.props.location.state.bucket_id, this.props.location.state.item_id)
    }

    render(){

        return (
            <div>
                <HeaderContainer />

                <ViewItem item_details={this.props.item_details}
                          item_id={this.state.item_id}
                          bucket_name={this.state.bucket_name}
                          modal_state={this.state.updateItem_isOpen}
                          updateItemModal={this.updateItemModal.bind(this)}
                          onChangeItemName={this.onChangeItemName.bind(this)}
                          updateItemName={this.updateItemName.bind(this)}
                          //onItemComplete={this.onItemComplete.bind(this)}
                />
            </div>

        )
    }

}

function mapStateToProps(state) {
    return {
        item_details: state.item

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            get_item: get_item,
            update_item: update_item
        }, dispatch)

}
withRouter(ItemContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)