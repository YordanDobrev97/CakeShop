import React, { Component } from 'react';

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
                {this.state.products.map((product) => {
                    const link = `/details/${product.id}`;
                    return (
                        <div className="card-body">
                            <img width="90" height="60" src={product.image} alt="product" />
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.price}</p>
                            <a href={ link } className="btn btn-primary">Details</a>
                        </div>)
                })}
            </div>
        );
    }
}
