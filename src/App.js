import React from 'react';
import './main.css';

import LoginPage from './containers/login-page/login';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Dashboard from './containers/dashboard/dashboard';

import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

class App extends React.Component {

  state = {
    loggedInStatus: localStorage[('isLogged')] === 'true'
  }

  onUserLoggedIn = () => {
    this.setState({loggedInStatus: true});
  }

  onUserLoggedOut = () => {
    localStorage.setItem('isLogged', false);
    this.setState({loggedInStatus: false});
  }

  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Header onUserLoggedOut={this.onUserLoggedOut} userLoggedInStatus={this.state.loggedInStatus} />
  
              <div>
                <Switch>

                  <Route path="/login"
                    render=
                    {
                      (props) => !this.state.loggedInStatus ? 
                      <LoginPage {...props} onUserLoggedIn = {this.onUserLoggedIn} />
                      :
                      <Redirect to="/dashboard" />
                      
                    }
                  />

                  <Route path="/dashboard" component={Dashboard} />

                </Switch>
              </div>
  
            <Footer />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
