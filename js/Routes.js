import React from "react";
import App from "./components/App";
import Intro from "./components/Intro";
import Home from "./containers/home"
import ItemContainer from "./containers/ItemContainer"
import BucketlistsContainer from "./containers/BucketlistsContainer"
import UserContainer from "./containers/UserContainer"

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
                <Route path="/bucketlist-items" component={ItemContainer}/>

                <Route path="/sign-up" component={UserContainer}/>
            </Switch>
        </Router>
    );
};

export default Routes;