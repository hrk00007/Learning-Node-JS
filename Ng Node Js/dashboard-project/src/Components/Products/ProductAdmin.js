import React from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom'

class ProductAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: '',
            errorMsg: ''
        }
    }
    componentDidMount() {
        let dataUrl = "http://127.0.0.1:5000/api/products/"
        Axios.get(dataUrl).then((response) => {
            this.setState({
                products: response.data
            })
        }).catch((error) => {
            this.setState({
                errorMsg: error.message
            })
        })
    }
    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
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
                                        <th>INFO</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.length > 0 ?
                                            <React.Fragment>
                                                {
                                                    this.state.products.map((product, index) => {
                                                        return (
                                                            <tr>
                                                                <td>{index + 1}</td>
                                                                <td> <img src={product.image} alt="" height="50px" width="50px" className='rounded-circle' /> </td>
                                                                <td>{product.name}</td>
                                                                <td>&#8377; {product.price.toFixed(2)}</td>
                                                                <td>{product.qty} Kgs</td>
                                                                <td>{product.info}</td>
                                                                <td>
                                                                    <NavLink to={`/update-product/${product._id}`} className="btn btn-primary btn-sm">Update</NavLink>
                                                                    <button type="button" class="btn btn-danger btn-sm">Delete</button>
                                                                </td>
                                                            </tr>
                                                        )

                                                    })

                                                }
                                            </React.Fragment>
                                            : null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductAdmin;