import React from 'react';
import './dashboard.css';

import LatestHits from './latest/latest';
import Perform from './performance/performance';
import StorageInfo from './storage/storage';
import NotificationList from './notification/notification';
import OrderList from './order/order';

class Dashboard extends React.Component {

  render() {

    return (

      <div className="dashboard container mt-5">

        <p className="greeting">Welcome back, <b>{JSON.parse(localStorage[('userData')]).userName}</b></p>

        <div className="stats">
          
            <LatestHits />
            <Perform />
            <StorageInfo />
            <NotificationList />

        </div>

        <OrderList />

      </div>
    );
  }
}

export default Dashboard;