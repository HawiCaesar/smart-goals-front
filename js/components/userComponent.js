import React from "react";

class UserComponent extends React.Component {

    render() {

        let register_results = ""

        if(this.props.user_detail.message !== ""){
            register_results = <p className={this.props.user_detail.message_dialogue}>{this.props.user_detail.message}</p>
        }

        return (
            <div className="sign-up">

                <h1 className="text-center">Smart Goals</h1>
                <h3 className="text-center"> Sign Up </h3>

                <div>
                    {(!this.props.form_errors) ? '' : <p className="alert alert-danger">{this.props.form_errors}</p>}
                    {register_results}
                </div>


                    <div className="form-group required">
                        <label className="control-label" htmlFor="email">Email</label>

                        <input className="form-control" id="email" name="email" required type="text"
                               value={this.props.email}
                               onChange={this.props.onChange}/>

                    </div>

                    <div className="form-group required"><label className="control-label"
                                                                htmlFor="password">Password</label>

                        <input className="form-control" id="password" name="password" required type="password"
                               value={this.props.password}
                               onChange={this.props.onChange}/>

                    </div>

                    <div className="form-group required"><label className="control-label" htmlFor="password">Confirm
                        Password</label>

                        <input className="form-control" id="password" name="confirm_password" required type="password"
                               value={this.props.confirm_password}
                               onChange={this.props.onChange}/>

                    </div>

                    <button className="btn btn-primary" onClick={this.props.onSubmit}>Sign Up</button>

            </div>
        )
    }
}

UserComponent.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    email: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    confirm_password: React.PropTypes.string.isRequired,
    form_errors: React.PropTypes.string.isRequired,
    user_detail: React.PropTypes.object.isRequired
}

export default UserComponent