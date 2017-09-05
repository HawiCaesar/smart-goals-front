import React from "react";
import HeaderContainer from "./HeaderContainer"
import BucketlistsContainer from "./BucketlistsContainer"

class Home extends React.Component {

    render(){

        return(
            <div>

                <HeaderContainer />

                <div className="bucketlists">
                    <h3>My bucketlists</h3>

                    <BucketlistsContainer />
                </div>
            </div>
        )
    }
}
export default Home