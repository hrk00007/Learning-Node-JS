import React from 'react';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
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
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList;