import React from 'react';
import Axios from 'axios'
import { Navigate, NavLink, redirect } from 'react-router-dom';
class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: '',
                image: '',
                price: '',
                qty: '',
                info: ''

            },
            imageName: 'Product Image',
            isSubmitted: false,
            errorMessage: ''
        }
    }

    //changeInput on event
    changeInput = (event) => {
        this.setState({
            product: {
                ...this.state.product,
                [event.target.name]: event.target.value
            }

        });
    }

    //changeImage convert image to base64
    changeImage = async (event) => {
        let imageFile = event.target.files[0];
        let base64Image = await this.base64Image(imageFile);
        this.setState({
            product: {
                ...this.state.product,
                image: base64Image,

            },
            imageName: event.target.files[0].name
        })

    }

    base64Image = (imageFile) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.addEventListener('load', () => {
                if (reader.result) {
                    resolve(reader.result);
                }
                else {
                    reject('Error loading image')
                }
            })
        })
    }


    //show name
    submitProduct = (event) => {
        console.log('submitProduct called')
        event.preventDefault()
        let dataUrl = "http://127.0.0.1:5000/api/products/"
        Axios.post(dataUrl, this.state.product).then((response) => {
            this.setState({
                isSubmitted: true
            })
        }).catch((error) => {
            this.setState({
                errorMessage: error
            })
        })

    };

    render() {
        return (
            <React.Fragment>
                {this.state.isSubmitted ? <Navigate replace to="/admin" /> :
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col">
                                <p className="h2 text-success">Create a Product</p>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti soluta odio ipsam, sed dolore, suscipit provident ex sunt deleniti qui, necessitatibus doloribus repellendus at excepturi laboriosam dolores aspernatur! Alias!</p>
                            </div>
                        </div>
                        <div className="row mt-3">

                            <div className="col-md-6">
                                <pre>{JSON.stringify(this.state)}</pre>
                                <div className="card">
                                    <div className="card-header">New Product</div>
                                    <div className="card-body">
                                        <form onSubmit={this.submitProduct}>
                                            <div className="form-group">
                                                <input
                                                    name='name'
                                                    value={this.state.product.name}
                                                    onChange={this.changeInput}
                                                    type="text" className="form-control" placeholder='Product Name' required />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-file">
                                                    <input
                                                        onChange={this.changeImage}
                                                        type="file" className="custom-file-input" id='customFile' required />
                                                    <label className='custom-file-label' htmlFor="customFile" >{this.state.imageName}</label>

                                                </div>
                                                {
                                                    this.state.product.image &&
                                                    <img src={this.state.product.image} alt="" width="40" height="40" />
                                                }
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name='price'
                                                    value={this.state.product.price}
                                                    onChange={this.changeInput}
                                                    type="number" className="form-control" placeholder='Price' required />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name='qty'
                                                    value={this.state.product.qty}
                                                    onChange={this.changeInput}
                                                    type="number" className="form-control" placeholder='Available Qty in kg' required />
                                            </div>
                                            <div className="form-group">
                                                <textarea
                                                    name='info'
                                                    value={this.state.product.info}
                                                    onChange={this.changeInput}
                                                    type="text" className="form-control" placeholder='General Info' required />
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" className=" btn btn-dark btn-sm" value='Create Product' />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div style={{ marginBottom: '100px' }} />
            </React.Fragment>
        )
    }
}

export default CreateProduct;