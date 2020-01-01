import React from 'react';
import './main.css';

import LoginPage from './containers/login-page/login-page';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Dashboard from './containers/dashboard/dashboard';
import ProductPage from './containers/product-page/product-page';
import AddProductPage from './containers/product-page/product-block/add-product/add-product';
import AccountsPage from './containers/accounts-page/accounts-page';

import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Header />
  
              <main>
                <Switch>

                  <Route exact path="/" render={() => (
                    this.props.userLoggedInStatus ?
                    <Redirect to="/dashboard"/>
                    :
                    <Redirect to="/login" />
                  )}/>

                  <Route exact path="/login" render={(props) => (
                    !this.props.userLoggedInStatus ?
                    <LoginPage {...props} />
                    :
                    <Redirect to="/dashboard" />
                  )} />

                  <Route exact path="/dashboard" render={(props) => (
                    this.props.userLoggedInStatus ?
                    <Dashboard {...props} />
                    :
                    <Redirect to="/login" />
                  )} />

                  <Route exact path="/products" component={ProductPage} />

                  <Route exact path="/add-product" component={AddProductPage} />

                  <Route exact path="/accounts" component={AccountsPage} />

                </Switch>
              </main>
  
            <Footer />
          </div>
      </BrowserRouter>
    );
  }
}

const mapGlobalStateToProps = (globalState) => {
  return {
      userLoggedInStatus: globalState.loggedInStatus
  }
}

export default connect(mapGlobalStateToProps)(App);
