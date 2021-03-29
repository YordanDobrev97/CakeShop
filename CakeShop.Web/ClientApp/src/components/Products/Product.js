import React from 'react';
import { Link } from 'react-router-dom';

const Product = function (props) {
    return (
        <div className="col-md-3">
            <div className="card-body ">
                <img width="90" height="60" src={props.product.image} alt="product" />
                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-text">{props.product.price}</p>

                <Link to={props.link} className="btn btn-primary">Details</Link>
            </div>
        </div>
    )
}

export default Product;