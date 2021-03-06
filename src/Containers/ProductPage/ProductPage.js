import React from 'react';
import './ProductPage.css';

import ProductBlock from '../../Components/ProductPage/ProductBlock/ProductBlock';
import CategoryBlock from '../../Components/ProductPage/CategoryBlock/CategoryBlock';

const ProductPage = () => {

    return (
        <div className="product-page container">
            <div className="product-content">
                <ProductBlock />
                <CategoryBlock />
            </div>
        </div>
    )
}

export default ProductPage;