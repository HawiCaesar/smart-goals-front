import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as utils from "../utils/tokenUtilities"
import { loginUser } from "../actions/authActions";
import  AuthComponent  from "../components/authComponent"
import Home from "./home"

 class AuthContainer extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }

    }

    onChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    onClick(){
        console.log(this.state)
        this.props.loginUser(this.state)
    }

    render(){

        return (
            <div>
            { (utils.isAuthenticated()) ?
                <Home />
                :
                <AuthComponent
                               auth_details={ this.props.auth0 }
                               results = { this.props.results }
                               email={ this.state.email }
                               password={ this.state.password }
                               onChange={ this.onChange.bind(this) }
                               onClick={ this.onClick.bind(this) }
                />
            }
            </div>
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

AuthContainer.contextTypes = {
    router: React.PropTypes.object
};

withRouter(AuthContainer)

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);






