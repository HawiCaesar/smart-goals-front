import React, { Component } from "react";
import HeaderContainer from "./HeaderContainer"
import BucketlistsContainer from "./BucketlistsContainer"

class Home extends Component {

    render(){

        // console.log("*********")
        //console.log(this.props)
        //console.log("*********")

        return(
            <div>

                <HeaderContainer />

                <h3>These are your bucketlists</h3>

                <BucketlistsContainer />

            </div>
        )
    }
}
export default Home