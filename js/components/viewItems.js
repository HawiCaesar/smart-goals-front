import React from "react";

class ViewItems extends React.Component {

    getBucketbyId(buckets, id) {
        return Object.assign({}, buckets.find(bucket => bucket.id == id));

    }

    show_bucket_name() {
        const single_bucket = this.getBucketbyId(this.props.buckets.results, this.props.id)

        return <h3>{single_bucket.name}</h3>
    }

    show_items() {

        const items_view = this.getBucketbyId(this.props.buckets.results, this.props.id)

        if (items_view.items.length === 0) {
            return <p className="alert alert-info"> You Have No items in this Bucketlist</p>
        } else {


            return items_view.items.map((item) => {

                return <li className="list-group-item" key={item.item_id}>
                <span className="badge">
                    <button className="btn btn-default btn-xs">
                        More
                    </button>
                </span>
                    {item.item_name}
                </li>
            })

        }
    }

    render() {
        return (
            <div>
                {this.show_bucket_name()}
                <ul>
                    {this.show_items()}
                </ul>
            </div>
        )
    }

}

export default ViewItems