import React from 'react';
import './login.css';

import axios from 'axios';

import { connect } from 'react-redux';

class LoginPage extends React.Component {

    state = {
        userName: '',
        userPassword: '',
        loginIsValid: false,
        passIsValid: false
    }

    gettingDataFromBackend = () => {
        axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
        .then(response => {
            localStorage.setItem('myBackEndData', JSON.stringify(response.data));
        }).then(()=>{
            this.props.history.push('/dashboard');
        });
    }

    toLocalStorage = () => {

        if (this.state.loginIsValid && this.state.passIsValid) {

            localStorage.setItem('userData', JSON.stringify({
                'userName': this.state.userName,
                'userPassword': this.state.userPassword,
            }));
    
            this.props.onUserLoggedIn();
    
            if (localStorage['myBackEndData'] && localStorage['myBackEndData']) {
                this.props.history.push('/dashboard');
            } else {
                this.gettingDataFromBackend();
            }
        } else alert('Login or password is invalid');

    }

    getUserName = (e) => {

        if (e.target.value) {
            document.querySelector('.login-val').style.opacity = '1';
        } else document.querySelector('.login-val').style.opacity = '0';

        const userNamePattern = /^[a-zA-Z0-9]{3,}$/;

        if (e.target.value.match(userNamePattern)) {
            e.target.style.backgroundColor = 'green';
            document.querySelector('.login-val').style.opacity = '0';
            this.setState({userName: e.target.value});
            this.setState({loginIsValid: true});
        } else {
            e.target.style.backgroundColor = '#54657d';
            return false;
        }
    }

    getPassword = (e) => {
        
        if (e.target.value) {
            document.querySelector('.pass-val').style.opacity = '1';
        } else document.querySelector('.pass-val').style.opacity = '0';

        const userPasswordPattern = /(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;

        if (e.target.value.match(userPasswordPattern)) {
            e.target.style.backgroundColor = 'green';
            document.querySelector('.pass-val').style.opacity = '0';
            this.setState({userPassword: e.target.value});
            this.setState({passIsValid: true});
        } else {
            e.target.style.backgroundColor = '#54657d';
            return false;
        }

    }

    componentDidMount() {
        if (!localStorage[('myBackEndData')]) {
            axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
            .then(response => {
                localStorage.setItem('myBackEndData', JSON.stringify(response.data));
            })
        }
    }

    render() {
        return (
            <div className="login-page">
                <form className='login-form' onSubmit={(e)=>e.preventDefault(e)}>
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

                <div className="validation">
                    <div className="login-val">
                        <h3>User login validation</h3>
                        <ul>
                            <li>Not less than 3 characters</li>
                            <li>Only alphanumeric characters</li>
                        </ul>
                    </div>
                    <div className="pass-val">
                        <h3>User password validation</h3>
                        <ul>
                            <li>Not less than 8 characters</li>
                            <li>Contains a digit</li>
                            <li>Contains an uppercase letter</li>
                            <li>Contains a lowercase letter</li>
                            <li>A character not being alphanumeric</li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onUserLoggedIn: () => {dispatch({type: 'USER_LOGIN'})}
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);