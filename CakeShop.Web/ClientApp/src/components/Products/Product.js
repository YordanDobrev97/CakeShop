import React from 'react';

export default function Product(props) {
    return (
        <div className="col-md-3">
            <div className="card-body ">
                <img width="90" height="60" src={props.product.image} alt="product" />
                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-text">{props.product.price}</p>
                <a href={props.link} className="btn btn-primary">Details</a>
            </div>
        </div>
    )
}