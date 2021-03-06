import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import * as utils from "../utils/tokenUtilities"
import validateEmail from "../utils/emailValidation"
import {loginUser} from "../actions/authActions";
import AuthComponent from "../components/authComponent"
import Home from "./home"

class AuthContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            form_errors: ''

        }

    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    // Login
    onClick() {
        // validate email
        if (validateEmail(this.state.email)) {

            if (this.state.password.length < 1) {
                this.setState({form_errors: "Password field is Required."})
            } else {
                this.props.loginUser(this.state);
            }
        } else {
            this.setState({form_errors: "Please Enter An Appropriate Email Address"})
        }
    }

    render() {

        return (
            <div>
                {(utils.isAuthenticated()) ?
                    <Home/>
                    :
                    <AuthComponent
                        auth_details={this.props.auth0}
                        results={this.props.results}
                        email={this.state.email}
                        form_errors={this.state.form_errors}
                        password={this.state.password}
                        onChange={this.onChange.bind(this)}
                        onClick={this.onClick.bind(this)}

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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loginUser: loginUser}, dispatch);
}

AuthContainer.contextTypes = {
    router: React.PropTypes.object
};

withRouter(AuthContainer)

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);






