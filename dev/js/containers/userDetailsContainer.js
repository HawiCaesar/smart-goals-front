import React from 'react';
import { connect } from 'react-redux';
import UserDetails from "../components/userDetails";

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails);