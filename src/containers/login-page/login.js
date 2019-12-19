import React from 'react';
import './login.css';

import { Link } from 'react-router-dom';

class  LoginPage extends React.Component {

    state = {
        isLogged: false,
        userName: '',
        userPassword: '' 
    }

    toLocalStorage = () => {

        const userNamePattern = /^[a-zA-Z0-9]+$/;
        const userPasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

        if (this.state.userName.match(userNamePattern) && this.state.userPassword.match(userPasswordPattern)) {
            this.setState({isLogged: true});

            localStorage.setItem('userData', JSON.stringify({
                'userName': this.state.userName,
                'userPassword': this.state.userPassword,
                'isLogged': this.state.isLogged
            }))
        }

    }

    getUserName = (e) => {
        this.setState({userName: e.target.value});
    }

    getPassword = (e) => {

        const userPasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

        if (e.target.value.match(userPasswordPattern)) {
            e.target.style.backgroundColor = 'green';
        } else e.target.style.backgroundColor = '#54657d';

        this.setState({userPassword: e.target.value});
    }

    render() {
        return (
            <div className="login-page">
                <form onSubmit={(e)=>e.preventDefault(e)}>
                    <h3>Welcome to Dashboard, Login</h3>
                    <div> 
                        <span>Username</span>
                        <input onChange={(e)=>{this.getUserName(e)}} type="text" name="username" className="username" required/>
                    </div>
                    <div> 
                        <span>Password</span>
                        <input onChange={(e)=>{this.getPassword(e)}} type="password" name="pass" required/>
                    </div>
                    <div>
                        <button onClick={this.toLocalStorage}>Login</button>
                    </div>
                    <div>
                        <button>Forgot your password?</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage;