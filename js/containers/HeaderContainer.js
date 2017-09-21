import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../actions/authActions";

import Header from "../components/Header";

class HeaderContainer extends React.Component {

    constructor(props){
        super(props)
    }

    logoutUser() {

        this.props.logoutUser()
        this.context.router.history.push("/intro");
    }

    bucketlistdashboard(){
        this.context.router.history.push("/home");
    }

    render() {

        return (
            <Header
                logoutUser={this.logoutUser.bind(this)}
                bucketlistdashboard={this.bucketlistdashboard.bind(this)}
            />
        );
    }
}

HeaderContainer.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    return {
        firstName: state.email,
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({logoutUser: logoutUser}, dispatch);
}

withRouter(HeaderContainer)

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);