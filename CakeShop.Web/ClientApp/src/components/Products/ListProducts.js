import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import Product from './Product';

const Products = function () {
    const [loading, setLoading] = useState(false);
    const [skip, setSkip] = useState(0);
    const [take, setTake] = useState(8);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44326/api/products/all')
            .then(r => r.json())
            .then(products => {
                setProducts(products);
                setLoading(true);
            })
    }, []);

    if (!loading) {
        return <div>Loading...</div>
    }

    //skip -> (productPerPage * currentPage) - productPerPage
    const listProducts = products.slice(skip, take);
    return (
        <div className="product-container">
            <div className="container">
                <div className="row">
                    {listProducts.map((product) => {
                        const link = `/details/${product.id}`;
                        return <Product key={product.id} link={link} product={product} />
                    })}
                </div>
            </div>

            <Pagination productsCount={products.length} />
        </div>
    )
}

export default Products;