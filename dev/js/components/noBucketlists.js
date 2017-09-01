import React from "react";

class NoBucketlists extends React.Component {
    render(){
        return(
            <div>
                <p className="alert alert-dismissible alert-info">
                    You Don't Have Any Bucketlists, Click on Add Bucketlist
                </p>
            </div>
        )
    }
}

export default NoBucketlists