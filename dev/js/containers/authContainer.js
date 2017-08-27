import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { loginUser } from "../actions/authActions";
import  AuthComponent  from "../components/authComponent"

 class AuthContainer extends React.Component{

    // constructor(props){
    //     super(props)
    // }
    //
    // componentWillReceiveProps(nextProps){
    //     console.log("next props", nextProps)
    // }

    loginUser(){
        this.props.loginUser()
    }

    render(){
        console.log("auth0 ",this.props.auth0)
        return (
            <AuthComponent loginUser={this.loginUser.bind(this)} auth_details={this.props.auth0}/>
        )
    }
 }
function mapStateToProps(state) {
    return {
        auth0: state.authenticate,
        results: state.authenticate.results.message,
        error: state.authenticate.error
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({loginUser: loginUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);






