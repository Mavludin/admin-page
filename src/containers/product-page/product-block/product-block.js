import React from 'react';

import { Link } from 'react-router-dom';

class ProductBlock extends React.Component {

    state = {
        productData: JSON.parse(localStorage[('adminData')]).productsPage.products,
        checkedItems: []
    }

    removeProduct = (pos,e) => {
        e.preventDefault();

        const tempArr = this.state.productData;
        let wholeStorage = JSON.parse(localStorage[('adminData')]);

        tempArr.splice(pos, 1);

        wholeStorage.productsPage.products = tempArr;
        localStorage.setItem('adminData', JSON.stringify(wholeStorage));
        this.setState({productData: tempArr});
    }

    onChecked = (pos,e) => {

        const tempData = this.state.checkedItems;

        if (e.target.checked) {
            tempData.push(pos);
            e.target.style.backgroundColor = '#f5a623';
        }
        else {
            e.target.style.backgroundColor = '#394e64';
            const index = tempData.indexOf(pos);
            if (index !== -1) tempData.splice(index, 1);
        }

        console.log(tempData)

        this.setState({checkedItems: tempData});

    }

    removeMultipleElements = () => {
        const tempArr = this.state.productData;

        let wholeStorage = JSON.parse(localStorage[('adminData')]);

        this.state.checkedItems.map(item=>{
            tempArr.splice(item,1)
        })

        console.log(tempArr);

        wholeStorage.productsPage.products = tempArr;
        localStorage.setItem('adminData', JSON.stringify(wholeStorage));
        this.setState({productData: tempArr});
    }


    render() {

        const renderingData = this.state.productData.map((item,pos) => {
            return (
                <tr>
                    <td>
                        <table>
                            <tr>
                                <td rowspan="2">
                                    <label htmlFor={`product-${pos+1}`}>
                                        <input onChange={(e)=>{this.onChecked(pos,e)}} type="checkbox" id={`product-${pos+1}`}/>
                                    </label>
                                </td>
                                <td className="tm-product-name">{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.unitSold}</td>
                                <td>{item.stock}</td>
                                <td>{item.expireDate}</td>
                                <td rowspan="2">
                                    <a href='/' onClick={(e)=>this.removeProduct(pos,e)} className="tm-product-delete-link">
                                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    {item.description}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            )
        });
        
        return (

            <div className="product-block">
                <div className="product-table-container">

                    <table className="table table-hover tm-table-small tm-product-table">
                        <tr>
                        <th scope="col">&nbsp;</th>
                            <th scope="col">PRODUCT NAME</th>
                            <th scope="col">CATEGORY</th>
                            <th scope="col">UNIT SOLD</th>
                            <th scope="col">IN STOCK</th>
                            <th scope="col">EXPIRE DATE</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </table>
                    
                    <table className="table table-hover tm-table-small tm-product-table data-table">
                                
                        {renderingData}

                    </table>

                </div>

                <Link to="/add-product" className="btn btn-primary btn-block text-uppercase mb-3">Add new product</Link>
                <button onClick={this.removeMultipleElements} className="btn btn-primary btn-block text-uppercase">
                    Delete selected products
                </button>
            </div>
        )
    }
}

export default ProductBlock;