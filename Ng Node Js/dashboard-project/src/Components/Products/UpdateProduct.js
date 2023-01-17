import React from 'react';
import Axios from 'axios'
import { Navigate, NavLink, redirect } from 'react-router-dom';
import { useParams } from "react-router-dom";

class UpdateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            id: '',
        }
    }


    render() {
        return (
            <React.Fragment>
                <pre></pre>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <p className="h2 text-success">Update a Product</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti soluta odio ipsam, sed dolore, suscipit provident ex sunt deleniti qui, necessitatibus doloribus repellendus at excepturi laboriosam dolores aspernatur! Alias!</p>
                        </div>
                    </div>

                </div>
                <div style={{ marginBottom: '100px' }} />
            </React.Fragment>
        )
    }
}

export default UpdateProduct;