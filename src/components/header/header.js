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
                    <div>
                        <Link className="nav-link" to="/dashboard">
                            <i className="fas fa-tachometer-alt"></i>
                            <p>Dashboard</p> 
                        </Link>
                    </div>

                    <div>
                        <Link className="nav-link" to="/products">
                            <i className="fas fa-shopping-cart"></i>
                            <p>Products</p> 
                        </Link>
                    </div>
                    <div>
                        <Link className="nav-link" to="/accounts">
                            <i className="far fa-user"></i>
                            <p>Accounts</p> 
                        </Link>
                    </div>
                </nav>

                {
                    props.userLoggedInStatus ?

                    <div>
                        <Link onClick={LoggedOut} className="nav-link" to="/login">

                            { JSON.parse(localStorage[('userData')]).userName }, <span>Logout</span>

                        </Link>
                    </div>

                    : null
                }

            </div>
        </header>
    )
}

export default Header;