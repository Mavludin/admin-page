import React from 'react';
import './main.css';

import LoginPage from './containers/login-page/login';
import Header from './components/header/header';

import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/footer/footer';

const App = () => {
  return (

    <BrowserRouter>
        <div className="App">
          <Header />

            <div>
              <Switch>
                <Route path="/login" component={LoginPage} />
              </Switch>
            </div>

          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
