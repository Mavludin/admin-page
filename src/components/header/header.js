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
                <a href="/"><h1>Product Admin</h1></a>
                <nav>
                    <div>
                        <a className="nav-link" href="/">
                            <i className="fas fa-tachometer-alt"></i>
                            <p>Dashboard</p> 
                        </a>
                    </div>

                    {   
                        props.userLoggedInStatus ?
                            <div>
                                <a className="nav-link" href="/">
                                    <i className="far fa-file-alt"></i>
                                    <p>Reports <i className="fas fa-angle-down"></i></p> 
                                </a>
                            </div>
                        : null

                    }

                    <div>
                        <a className="nav-link" href="/">
                            <i className="fas fa-shopping-cart"></i>
                            <p>Products</p> 
                        </a>
                    </div>
                    <div>
                        <a className="nav-link" href="/">
                            <i className="far fa-user"></i>
                            <p>Accounts</p> 
                        </a>
                    </div>

                    {   
                        props.userLoggedInStatus ?
                            <div>
                                <a className="nav-link" href="/">
                                    <i className="fas fa-cog"></i>
                                    <p>Settings <i className="fas fa-angle-down"></i></p> 
                                </a>
                            </div>
                        : null

                    }

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