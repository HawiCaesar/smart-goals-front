import React from "react";
import HeaderContainer from "./HeaderContainer"
import BucketlistsContainer from "./BucketlistsContainer"

class Home extends React.Component {

    render(){

        return(
            <div>
                <HeaderContainer />

                <BucketlistsContainer />
            </div>
        )
    }
}
export default Home