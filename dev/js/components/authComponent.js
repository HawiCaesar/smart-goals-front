import React, { Component } from "react";

class AuthComponent extends Component{


    render(){

        let login_results = ""

        if(this.props.auth_details.login_error === true){
            login_results = <p className="alert alert-danger">{this.props.auth_details.error}</p>
        }

        return (

            <div className="loginform">

                    <h1 className="text-center">Smart Goals</h1>

                    <div>
                        {login_results}
                        {(!this.props.form_errors)?'':<p className="alert alert-danger">{this.props.form_errors}</p>}
                    </div>

                    <div className="form-group required">
                        <label className="control-label" htmlFor="email">Email</label>

                        <input className="form-control" id="email" name="email" required type="text"
                               value={this.props.email}
                        onChange={this.props.onChange}/>

                    </div>

                    <div className="form-group required"><label className="control-label" htmlFor="password">Password</label>

                        <input className="form-control" id="password" name="password" required type="password"
                               value={this.props.password}
                               onChange={this.props.onChange}
                        />

                    </div>

                    <button className="btn btn-primary" onClick={this.props.onClick}>Login</button>

            </div>
        );
    }
}

AuthComponent.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    onClick: React.PropTypes.func.isRequired,
    email: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    form_errors: React.PropTypes.string.isRequired,
    auth_details: React.PropTypes.object.isRequired
}

export default AuthComponent;