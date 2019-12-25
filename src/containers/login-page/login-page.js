import React from 'react';
import './login.css';

import axios from 'axios';

import { connect } from 'react-redux';

class LoginPage extends React.Component {

    state = {
        userName: '',
        userPassword: '' 
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

        localStorage.setItem('userData', JSON.stringify({
            'userName': this.state.userName,
            'userPassword': this.state.userPassword,
        }));

        this.props.onUserLoggedIn();

        if (localStorage['myBackEndData']) {
            this.props.history.push('/dashboard');
        } else {
            this.gettingDataFromBackend();
        }
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
            <div className="login-page mt-5">
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