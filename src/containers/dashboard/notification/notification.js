import React from 'react';

class NotificationList extends React.Component {

  render() {
    const data = JSON.parse(localStorage[('adminData')]).dasbhoardPage.notifications;

    const renderingData = data.map((item,pos)=>{

        return (
            <div className="notification-item" key={pos+1}>
                <div className="notification-thumbnail">
                    <img src={item.pic} alt="Avatar" />
                </div>
                <div className="notification-desc">
                    <p>{item.message}</p>
                    <span>{item.time} ago</span>
                </div>
            </div>
        )
    });

    return (
        <div className="notification">
            <h2>Notification List</h2>

            <div className="notification-block">
                {renderingData}
                {renderingData}
                {renderingData}
            </div>
        </div>
    );
  }
}

export default NotificationList;
