import React from "react"

class UpdateItem extends React.Component{

    render(){
        return (
            <div>
                <h3>Update Item</h3>

                <div className="form-group">
                    <input className="form-control" type="text" defaultValue={this.props.item.item.item_name}
                    onChange={this.props.onChangeItem} />
                </div>

                <div className="checkbox">
                    <label>
                        {this.props.item.item.done !== false ?
                            <input type="checkbox" value="false" defaultChecked onChange={this.props.onChangeItem}/> :
                            <input type="checkbox" value="true" onChange={this.props.onChangeItem} />
                        }
                        Completed This Task</label>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-sm" onClick={this.props.updateItem}>Update Item</button>
                </div>
            </div>
        )
    }
}

export default UpdateItem