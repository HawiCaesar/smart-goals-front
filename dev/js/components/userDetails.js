import React, { Component } from "react";


class UserDetails extends Component{

    render(){

        if(!this.props.user){
            return <p>Please click on a user</p>
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
            </div>

        );
    }
}

export default UserDetails