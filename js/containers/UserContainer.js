import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

class RegisterContainer extends React.Component{



    render(){
        return (

        )
    }


}

function mapStateToProps(state) {
    return {
        auth0: state.authenticate
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({loginUser: loginUser}, dispatch);
}

export default RegisterContainer