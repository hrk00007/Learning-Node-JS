import React from 'react';
import Axios from 'axios';

class ProductList extends React.Component {
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
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <h2>Product Info</h2>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi fuga perferendis nobis nemo, dicta laboriosam rem magnam tempore. Enim!</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.state.products.length > 0 ?
                                <React.Fragment>
                                    {

                                        this.state.products.map((product) => {
                                            return (
                                                <div className="col-md-4">
                                                    <div className="card text-center">
                                                        <div className="card-header text-center bg-white">
                                                            <img src={product.image} alt="" width="150px" height="150px" />
                                                        </div>
                                                        <div className="card-body">
                                                            <ul className='list-group list-group-flush h3'>
                                                                <li className="list-group-item">
                                                                    <b>Name:</b> {product.name}
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <b>Price:</b> &#8377; {product.price.toFixed(2)}
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <b>Qty:</b> {product.qty} kgs
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="card-footer">
                                                            <p className="lead">{product.info}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </React.Fragment>
                                : null
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList;