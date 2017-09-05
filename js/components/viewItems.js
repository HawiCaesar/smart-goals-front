import React from "react";

class ViewItems extends React.Component {

    getBucketbyId(buckets, id) {
        return Object.assign({}, buckets.find(bucket => bucket.id == id));

    }

    show_items(){

        const items_view = this.getBucketbyId(this.props.buckets.results, this.props.id)

        if(items_view.items.length === 0){
            return <p className="alert alert-info"> You Have not items in this Bucketlist</p>
        }else{

            return items_view.items.map((item) => {

                return <li className="list-group-item" key={item.item_id}>
                    <span className="badge">1</span>
                    {item.item_name}
                </li>
            })
        }


    }

    render() {
        return (
            <di>
                <ul>
                    {this.show_items()}
                </ul>
            </di>
        )
    }

}
export default ViewItems