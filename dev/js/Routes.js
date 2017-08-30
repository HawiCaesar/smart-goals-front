import React from "react";
import App from "./components/App";
import Intro from "./components/Intro";
import Home from "./containers/home"

import history from "./history";
import {
    Router,
    Route,
    Switch
} from "react-router-dom";

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/home" component={Home} />
                <Route path="/intro" component={Intro}/>
            </Switch>
        </Router>
    );
};

export default Routes;