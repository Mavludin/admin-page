import React from 'react';
import './login.css';

class LoginPage extends React.Component {

    state = {
        userName: '',
        userPassword: '' 
    }

    toLocalStorage = () => {

        localStorage.setItem('userData', JSON.stringify({
            'userName': this.state.userName,
            'userPassword': this.state.userPassword,
        }));

        localStorage.setItem('isLogged', true);
        this.props.onUserLoggedIn();
        this.props.history.push('/dashboard');
    }

    getUserName = (e) => {
        this.setState({userName: e.target.value});
    }

    getPassword = (e) => {

        const userPasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

        if (e.target.value.match(userPasswordPattern)) {
            e.target.style.backgroundColor = 'green';
            this.setState({userPassword: e.target.value});
        } else {
            e.target.style.backgroundColor = '#54657d';
            return;
        }

    }

    render() {
        return (
            <div className="login-page mt-5">
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
                </form>
            </div>
        )
    }
}

export default LoginPage;