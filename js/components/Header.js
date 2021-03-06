import React from "react";
import { Link } from "react-router"

const Header = (props) => (

    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" onClick={props.bucketlistdashboard}>Smart Goals</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <ul className="nav navbar-nav navbar-right">
                        <li><a onClick={props.logoutUser}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

);

export default Header;