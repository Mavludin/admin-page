import React from 'react';
import './main.css';

import LoginPage from './containers/login-page/login-page';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Dashboard from './containers/dashboard/dashboard';
import ProductPage from './containers/product-page/product-page';
import AddProductPage from './containers/product-page/product-block/add-product/add-product';

import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import axios from 'axios';
import AccountsPage from './containers/accounts-page/accounts-page';

class App extends React.Component {

  state = {
    loggedInStatus: localStorage[('isLogged')] === 'true',
  }

  onUserLoggedIn = () => {
    this.setState({loggedInStatus: true});
  }

  onUserLoggedOut = () => {
    localStorage.setItem('isLogged', false);
    this.setState({loggedInStatus: false});
  }

  componentDidMount() {
    axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
    .then(response => {

      console.log(response.data)

      localStorage.setItem('adminData', JSON.stringify(response.data));

    })
  }

  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Header onUserLoggedOut={this.onUserLoggedOut} userLoggedInStatus={this.state.loggedInStatus} />
  
              <div>
                <Switch>

                  <Route exact path="/" render={() => (
                    this.state.loggedInStatus ?
                    <Redirect to="/dashboard"/>
                    :
                    <Redirect from="*" to="/login" />
                  )}/>

                  <Route path="/login" render={ props => <LoginPage {...props} onUserLoggedIn = {this.onUserLoggedIn} />} />

                  <Route path="/dashboard" render={props => <Dashboard {...props} dataFromBackEnd = {this.state.dataFromBackEnd} />} />

                  <Route path="/products" component={ProductPage} />

                  <Route path="/add-product" component={AddProductPage} />

                  <Route path="/accounts" component={AccountsPage} />

                </Switch>
              </div>
  
            <Footer />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
