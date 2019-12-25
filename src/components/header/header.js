import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Header extends React.Component {

    toDashBoard = React.createRef();
    toProducts = React.createRef();
    toAccounts = React.createRef();
    hiddenMenu = React.createRef();

    onHandleRedirect = (e) => {
        if (!this.props.userLoggedInStatus) {
            e.preventDefault();
            alert('You need to Log-In first!');
        }
    }

    showHiddenMenu = () => {
        this.hiddenMenu.current.style.transform = 'translateX(0%)';
    }

    closeHiddenMenu = () => {
        this.hiddenMenu.current.style.transform = 'translateX(-100%);';
    }

    render() {
        return (
            <header>
                <div className="header-content container">
                    <Link to="/"><h1>Product Admin</h1></Link>
                    <nav className="top-menu">
                        <Link ref={this.toDashBoard} onClick={(e)=>this.onHandleRedirect(e)} className="nav-link" to="/dashboard">
                            <div>
                                <i className="fas fa-tachometer-alt"></i>
                                <p>Dashboard</p> 
                            </div>
                        </Link>
    
                        <Link ref={this.toProducts} onClick={(e)=>this.onHandleRedirect(e)} className="nav-link" to="/products">
                            <div>
                                <i className="fas fa-shopping-cart"></i>
                                <p>Products</p> 
                            </div>
                        </Link>
    
                        <Link ref={this.toAccounts} onClick={(e)=>this.onHandleRedirect(e)} className="nav-link" to="/accounts">
                            <div>
                                <i className="far fa-user"></i>
                                <p>Accounts</p> 
                            </div>
                        </Link>
    
                    </nav>
    
                    {
                        this.props.userLoggedInStatus ?
                        
                        <Link onClick={this.props.onUserLoggedOut} className="nav-link logout" to="/login">
                            <div>
                                { JSON.parse(localStorage[('userData')]).userName }, <span>Logout</span>
                            </div>
                        </Link>
    
                        : null
                    }

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                        <i class="fas fa-bars tm-nav-icon"></i>
                    </button>

                    <nav ref={this.hiddenMenu} className='hidden-menu'>

                        <Link ref={this.toDashBoard} onClick={(e)=>this.onHandleRedirect(e)} className="nav-link" to="/dashboard">
                            <div>
                                <i className="fas fa-tachometer-alt"></i>
                                <p>Dashboard</p> 
                            </div>
                        </Link>
    
                        <Link ref={this.toProducts} onClick={(e)=>this.onHandleRedirect(e)} className="nav-link" to="/products">
                            <div>
                                <i className="fas fa-shopping-cart"></i>
                                <p>Products</p> 
                            </div>
                        </Link>
    
                        <Link ref={this.toAccounts} onClick={(e)=>this.onHandleRedirect(e)} className="nav-link" to="/accounts">
                            <div>
                                <i className="far fa-user"></i>
                                <p>Accounts</p> 
                            </div>
                        </Link>

                        {
                            this.props.userLoggedInStatus ?
                            
                            <Link onClick={this.props.onUserLoggedOut} className="nav-link" to="/login">
                                <div>
                                    { JSON.parse(localStorage[('userData')]).userName }, <span>Logout</span>
                                </div>
                            </Link>
        
                            : null
                         }

                    </nav>
    
                </div>
            </header>
        )
    }
}

const mapGlobalStateToProps = (globalState) => {
    return {
        userLoggedInStatus: globalState.loggedInStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserLoggedOut: () => {dispatch({type: 'USER_LOGOUT'})}
    }
}

export default connect(mapGlobalStateToProps, mapDispatchToProps)(Header);