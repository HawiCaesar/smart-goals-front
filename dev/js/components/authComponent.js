import React, { Component } from "react";

class AuthComponent extends Component{

    render(){
         console.log("*********");
         console.log("auth details", this.props.auth_details.user_logged_in);
         console.log("*********");

        let login_results = ""

        if(this.props.auth_details.login_error === true){
            login_results = <p className="alert alert-danger">{this.props.auth_details.error}</p>
        }

        if(this.props.auth_details.user_logged_in === true){
            login_results = <p className="alert alert-success">{this.props.auth_details.results.message}</p>
        }

        return (

            <div className="loginform">

                <h1 className="text-center">Smart Goals</h1>

                <div className="form-group required"><label className="control-label" htmlFor="email">Email</label>

                    <input className="form-control" id="email" name="email" required type="text" value="" />

                </div>

                <div className="form-group required"><label className="control-label" htmlFor="password">Password</label>

                    <input className="form-control" id="password" name="password" required type="password" value="" />

                </div>

                <button className="btn btn-primary" onClick={this.props.loginUser}>Login</button>

                <div>{login_results}</div>

            </div>
        );
    }
}

export default AuthComponent;