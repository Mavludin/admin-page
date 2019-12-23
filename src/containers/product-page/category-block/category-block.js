import React from 'react';

import './category-block.css';

class CategoryBlock extends React.Component {

    popUp = React.createRef();

    showPopUp = () => {
        this.popUp.current.style.display = 'block';
    }

    onCategoryName = (e) => {
        console.log(e.target.value)
    }

    render() {
        
        const data = JSON.parse(localStorage[('adminData')]).productsPage.categories;
        
        const renderingData = data.map((item,pos) => {
            return (
                <tr key={pos+1}>
                    <td className="tm-product-name">{item}</td>
                    <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                        </a>
                    </td>
              </tr>
            )
        });
        
        return (
            <div className="category-block">

                <div ref={this.popUp} className="add-category-popUp">

                    <input type="text" onChange={(e)=>this.onCategoryName(e)} />

                    <button onClick={this.addNewCategory} className="btn btn-primary btn-block text-uppercase mb-3">
                        Add
                    </button>

                </div>

                <h2 className="tm-block-title">Product Categories</h2>

                <div className="category-table-container">
                    <table className="table tm-table-small tm-product-table">
                        <tbody>
                            {renderingData}
                        </tbody>
                    </table>
                </div>

                <button onClick={this.showPopUp} className="btn btn-primary btn-block text-uppercase mb-3">
                    Add new category
                </button>

            </div>
        )
    }
}

export default CategoryBlock;