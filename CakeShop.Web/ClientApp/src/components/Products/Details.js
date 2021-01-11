import React, { Component } from 'react';

import './style.css';

export default class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: '',
            isLoading: false,
        }
    }


    componentDidMount() {
        const location = window.location.href;
        const lastIndex = location.lastIndexOf('/');
        const id = location.substring(lastIndex + 1);

        fetch('https://localhost:44326/api/products/details/' + id)
            .then(r => r.json())
            .then(result => {
                this.setState({
                    product: result,
                    isLoading: true,
                })
            })
    }

    addBasket = () => {
        const product = { ...this.state.product, count: 1 };

        console.log(product);
        sessionStorage.setItem(`product${this.state.product.name}`, 
            JSON.stringify(product));
    }

    render() {
        if (!this.state.isLoading) {
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
                                        <img src={ this.state.product.image } />
                                    </div>
                                </div>
                            </div>
                            <div class="details col-md-6">
                                <h3 className="product-title">{ this.state.product.name }</h3>

                                <h4 className="price">price: <span>$ { this.state.product.price }</span></h4>
                                <div className="action">
                                    <button onClick={ this.addBasket } className="add-to-cart btn btn-default" type="button">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}