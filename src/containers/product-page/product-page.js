import React from 'react';
import './product.css';
import ProductBlock from './product-block/product-block';
import CategoryBlock from './category-block/category-block';

class ProductPage extends React.Component {

    render() {
        return (
            <div className="product-page container mt-5">
                <div className="product-content">
                    <ProductBlock />
                    <CategoryBlock />
                </div>
            </div>
        )
    }
}

export default ProductPage;