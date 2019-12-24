import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';

const Header = (props) => {

    const LoggedOut = () => {
        props.onUserLoggedOut();
    }

    return (
        <header>
            <div className="header-content container">
                <Link to="/"><h1>Product Admin</h1></Link>
                <nav>
                    <Link className="nav-link" to="/dashboard">
                        <div>
                            <i className="fas fa-tachometer-alt"></i>
                            <p>Dashboard</p> 
                        </div>
                    </Link>

                    <Link className="nav-link" to="/products">
                        <div>
                            <i className="fas fa-shopping-cart"></i>
                            <p>Products</p> 
                        </div>
                    </Link>

                    <Link className="nav-link" to="/accounts">
                        <div>
                            <i className="far fa-user"></i>
                            <p>Accounts</p> 
                        </div>
                    </Link>

                </nav>

                {
                    props.userLoggedInStatus ?
                    
                    <Link onClick={LoggedOut} className="nav-link" to="/login">
                        <div>
                            { JSON.parse(localStorage[('userData')]).userName }, <span>Logout</span>
                        </div>
                    </Link>

                    : null
                }

            </div>
        </header>
    )
}

export default Header;