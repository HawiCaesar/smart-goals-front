import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import UserList from "../components/userList";
import {selectUser} from "../actions/index";


function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);