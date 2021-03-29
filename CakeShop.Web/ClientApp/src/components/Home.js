import React, { Component } from 'react';
import About from './About/About';

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            products: [],
        }
    }

    componentDidMount() {
        fetch('https://localhost:44326/api/products/all')
            .then(r => r.json())
            .then(products => {
                console.log(products);
                this.setState({
                    products: products,
                    isLoading: true,
                })
            })
    }

    render() {
        if (!this.state.isLoading) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div className="product-container">
                <div>
                    <h1>Welcome to CakeShop</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col text-center m-md-3">
                            <a href="/products" className="btn btn-light">Products</a>
                        </div>
                    </div>
                </div>
                <About />
            </div>
        );
    }
}
