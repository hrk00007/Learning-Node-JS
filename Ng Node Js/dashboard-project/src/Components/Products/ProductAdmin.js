import React from 'react';
import { NavLink } from 'react-router-dom'

class ProductAdmin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success">Product Details</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quia culpa earum dolores aliquam eaque nisi atque. Officiis, nam id.</p>
                            <NavLink to='/create-product' className="btn btn-danger btn-sm font-weight-bold">create</NavLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className="table table-dark text-center">
                                <thead>
                                    <tr>
                                        <th>SNO</th>
                                        <th>PRODUCT</th>
                                        <th>NAME</th>
                                        <th>PRICE</th>
                                        <th>QTY</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductAdmin;