import React, { useState, useEffect, useCallback } from 'react';
import { withRouter, useParams } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';

import './style.css';

const Details = function () {
    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('https://localhost:44326/api/products/details/' + id)
            .then(r => r.json())
            .then(result => {
                setProduct(result);
                setLoading(true);
            })
    }, []);

    const addBasket = useCallback(() => {
        const storageProduct = { ...product, count: 1 };

        sessionStorage.setItem(`product${product.name}`,
            JSON.stringify(storageProduct));
        NotificationManager.success('The product has been added to the cart', product.name);
    });

    if (!loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="container">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">

                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1">
                                    <img src={product.image} />
                                </div>
                            </div>
                        </div>
                        <div class="details col-md-6">
                            <h3 className="product-title">{product.name}</h3>

                            <h4 className="price">price: <span>$ {product.price}</span></h4>
                            <div className="action">
                                <button onClick={addBasket} className="add-to-cart btn btn-default" type="button">Add to cart</button>
                            </div>
                            <NotificationContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Details);