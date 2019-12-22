import React from 'react';

class ProductBlock extends React.Component {

    render() {
        
        const data = JSON.parse(localStorage[('adminData')]).productsPage.products;
        
        const renderingData = data.map((item,pos) => {
            return (
                <tr key={pos+1}>
                    <th scope="row"><input type="checkbox" /></th>
                    <td className="tm-product-name">{item.name}</td>
                    <td>{item.unitSold}</td>
                    <td>{item.stock}</td>
                    <td>{item.expireDate}</td>
                    <td>
                    <a href="/#" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                    </a>
                    </td>
              </tr>
            )
        });
        
        return (
            <div className="product-block">
                <div className="product-table-container">
                    
                    <table className="table table-hover tm-table-small tm-product-table">
                        <thead>
                        <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">PRODUCT NAME</th>
                            <th scope="col">UNIT SOLD</th>
                            <th scope="col">IN STOCK</th>
                            <th scope="col">EXPIRE DATE</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                            {renderingData}
                        </tbody>
                    </table>

                </div>

                <a href="add-product.html" className="btn btn-primary btn-block text-uppercase mb-3">Add new product</a>
                <button className="btn btn-primary btn-block text-uppercase">
                    Delete selected products
                </button>
            </div>
        )
    }
}

export default ProductBlock;