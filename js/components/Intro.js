import  React from "react";

class Intro extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Smart Goals</h1>
                <h3>Remember your ideas, goals easily and quickly</h3>
                <div id="home_button">
                    <a href="#" className="btn btn-primary">Sign Up</a>
                    <a href="/" className="btn btn-primary">Login</a>
                </div>
            </div>
        );
    }

}
export default Intro