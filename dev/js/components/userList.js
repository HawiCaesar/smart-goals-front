import React, { Component } from "react";


class UserList extends Component{

    createListItems(){
        return this.props.users.map((user) => {
            return (<li onClick={() => this.props.selectUser(user)} key={user.id}>
                {user.first} {user.last}</li>)
        })
    }

    render(){
        return (
           <ul>
               {this.createListItems()}
           </ul>
        );
    }
}

export default UserList