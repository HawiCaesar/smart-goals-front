import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import validateEmail from "../utils/emailValidation"

import {registerUser} from "../actions/userActions"
import UserComponent from "../components/userComponent"

class UserContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirm_password: '',
            form_errors: '',
            sign_up: false

        }

    }

    componentWillReceiveProps(nextProps){

        if (nextProps.user_detail.message === "User already registered. Kindly Login"){

            console.log("*****")
            console.log(nextProps)
            console.log("*****")

        }else if(nextProps.user_detail.message === "User registered successfully."){

            setTimeout(function () {

                this.context.history.push("/")

            }.bind(this), 1500);
        }
    }


    onSubmit(event) {

        if (validateEmail(this.state.email)) {

            if (this.state.password.length < 1) {
                this.setState({form_errors: "Password field is Required."})
            }

            if (this.state.confirm_password.length < 1) {
                this.setState({form_errors: "Confirm Password field is Required."})
            }

            if (this.state.password !== this.state.confirm_password) {
                this.setState({form_errors: "Confirmation Password must match your Password entry"})
            }else if(this.state.password === this.state.confirm_password && this.state.confirm_password.length > 1){
                this.props.registerUser(this.state)
            }

        } else {
            this.setState({form_errors: "Please Enter An Appropriate Email Address"})
        }

        event.preventDefault()

    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <UserComponent user_detail={this.props.user_detail}
                           email={this.state.email}
                           form_errors={this.state.form_errors}
                           password={this.state.password}
                           confirm_password={this.state.confirm_password}
                           onChange={this.onChange.bind(this)}
                           onSubmit={this.onSubmit.bind(this)}
            />
        )
    }


}

function mapStateToProps(state) {
    return {
        user_detail: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({registerUser: registerUser}, dispatch);
}

withRouter(UserContainer)

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)