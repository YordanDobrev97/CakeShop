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

    render() {
        if (!this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div class="container">
                <div class="card">
                    <div class="container-fliud">
                        <div class="wrapper row">
                            <div class="preview col-md-6">

                                <div class="preview-pic tab-content">
                                    <div class="tab-pane active" id="pic-1">
                                        <img src={ this.state.product.image } />
                                    </div>
                                </div>
                            </div>
                            <div class="details col-md-6">
                                <h3 class="product-title">{ this.state.product.name }</h3>

                                <h4 class="price">price: <span>$ { this.state.product.price }</span></h4>
                                <div class="action">
                                    <button class="add-to-cart btn btn-default" type="button">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}