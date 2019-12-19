import React from 'react';
import './header.css';

const Header = () => {
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

                    <div>
                        <a className="nav-link" href="/">
                            <i className="far fa-file-alt"></i>
                            <p>Reports <i className="fas fa-angle-down"></i></p> 
                        </a>
                    </div>

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

                    <div>
                        <a className="nav-link" href="/">
                            <i className="fas fa-cog"></i>
                            <p>Settings <i className="fas fa-angle-down"></i></p> 
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;