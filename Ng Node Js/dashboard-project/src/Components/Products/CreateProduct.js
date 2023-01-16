import React from 'react';

class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h2 text-success">Create a Product</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti soluta odio ipsam, sed dolore, suscipit provident ex sunt deleniti qui, necessitatibus doloribus repellendus at excepturi laboriosam dolores aspernatur! Alias!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">New Product</div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder='Product Name' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CreateProduct;