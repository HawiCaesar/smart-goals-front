import React from "react"

class UpdateItem extends React.Component{

    render(){
        return (
            <div>
                <h3>Update Item</h3>

                <div className="form-group">
                    <input className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <input className="form-control" type="date" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-sm">Update Item</button>
                </div>
            </div>
        )
    }
}

export default UpdateItem