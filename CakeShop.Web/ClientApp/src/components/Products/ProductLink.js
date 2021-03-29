import React from 'react';
import { Link } from 'react-router-dom';

const ProductLink = function () {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center m-md-3">
                    <Link to='/products' className="btn btn-light w-25 bg-dark text-light">Products</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductLink;
