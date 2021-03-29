import React, { Component } from 'react';
import Pagination from '../Pagination/Pagination';
import Product from './Product';

export default class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            products: [],
            skip: 0,
            take: 8,
        }
    }

    componentDidMount() {
        fetch('https://localhost:44326/api/products/all')
            .then(r => r.json())
            .then(products => {
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
        //skip -> (productPerPage * currentPage) - productPerPage
        const listProducts = this.state.products.slice(this.state.skip, this.state.take);

        return (
            <div className="product-container">
                <div className="container">
                    <div className="row">
                        {listProducts.map((product) => {
                            const link = `/details/${product.id}`;
                            return <Product link={link} product={product} />
                        })}
                    </div>
                </div>
                <Pagination productsCount={ this.state.products.length }/>
            </div>
        );
    }
}