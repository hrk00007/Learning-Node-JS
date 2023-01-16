import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <nav className='navbar navbar-dark bg-success navbar-expand-sm'>
                    <div className="container">
                        <NavLink to='/' className="navbar-brand">
                            <i className='fa fa-shopping-cart'> BigBasket</i>
                        </NavLink>

                        <div className="collapse navbar-collapse">
                            <ul className='navbar-nav'>
                                <li className='nav=item'>
                                    <NavLink to='/' className='nav-link'>Home</NavLink>
                                </li>
                                <li className='nav=item'>
                                    <NavLink to='/products' className='nav-link'>Products</NavLink>
                                </li>
                            </ul>
                            <ul className='navbar-nav ml-auto'>
                                <li className='nav=item'>
                                    <NavLink to='/admin' className='nav-link'>Admin</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default NavBar;