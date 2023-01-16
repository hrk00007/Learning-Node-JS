import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="landing-page">
                    <div className="wrapper">
                        <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                            <h2 className="display-3">
                                <i className='fa fa-shopping-cart'> BigBasket</i>
                            </h2>
                            <p className="lead px-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio, officia quae reprehenderit voluptate reiciendis distinctio maxime assumenda harum odit impedit ipsam itaque, dignissimos aperiam expedita, illo omnis dicta. Animi.</p>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Home;