import React from 'react'
import ProductLink from './Products/ProductLink';

const Home = function () {
    return (
        <div className="product-container">
            <div>
                <h1 className="text-dark">Welcome to CakeShop</h1>
            </div>

            <ProductLink />
        </div>
    );
}

export default Home;