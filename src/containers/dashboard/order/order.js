import React from 'react';

class OrderList extends React.Component {

  render() {
    const data = JSON.parse(localStorage[('myBackEndData')]).dasbhoardPage.orders;

    const renderingData = data.map((item,pos)=>{

        let classStr = 'tm-status-circle';

        switch (item.status) {
            case 'Moving':
                classStr+= ' moving';
                break;
            case 'Pending':
                classStr+= ' pending';
                break;
            case 'Cancelled':
                classStr+= ' cancelled';
                break;
            case 'Delivered':
                    classStr+= ' delivered';
                    break;
            default: classStr = 'tm-status-circle';
        }

        return (
            <tr key={pos+1}>
                <th scope="row"><b>#{item.orderNo}</b></th>
                <td>
                    <div className={classStr}>
                    </div>{item.status}
                </td>
                <td><b>{item.operators}</b></td>
                <td><b>{item.location}</b></td>
                <td><b>{item.distance} km</b></td>
                <td>{item.startDate}</td>
                <td>{item.deliveryDate}</td>
            </tr>
        )
    });

    return (
        <div className="order">
            <h2>Order List</h2>
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">ORDER NO.</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">OPERATORS</th>
                        <th scope="col">LOCATION</th>
                        <th scope="col">DISTANCE</th>
                        <th scope="col">START DATE</th>
                        <th scope="col">EST DELIVERY DUE</th>
                    </tr>
                </thead>
                <tbody>
                    {renderingData}
                </tbody>
            </table>
        </div>
    );
  }
}

export default OrderList;
