import React from 'react';

class CategoryBlock extends React.Component {

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
                <h2 className="tm-block-title">Product Categories</h2>

                <div className="category-table-container">
                    <table className="table tm-table-small tm-product-table">
                        <tbody>
                            {renderingData}
                        </tbody>
                    </table>
                </div>

                <button class="btn btn-primary btn-block text-uppercase mb-3">
                    Add new category
                </button>

            </div>
        )
    }
}

export default CategoryBlock;