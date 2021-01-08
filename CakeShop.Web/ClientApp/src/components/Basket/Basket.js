import React, { Component } from 'react';

export default class Basket extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            isLoading: false,
        }
    }

    componentDidMount() {
        const storageProducts = { ...sessionStorage };

        const result = [];
        Object.entries(storageProducts).forEach(index => {
            const product = index[1];
            result.push(JSON.parse(product))
        });

        this.setState(prevState => ({
            products: this.state.products.concat(result),
            isLoading: true,
        }));
    }

    render() {
        if (!this.state.isLoading) {
            return <div>Loading...</div>
        }

        console.log(this.state.products)
        return (
            <div className="card-body">
                {this.state.products.map(product => {
                    return (<div className="row">
                        <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src={product.image} alt="prewiew" width="120" height="80" />
                        </div>
                        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                            <h4 className="product-name"><strong>{product.name}</strong></h4>
                        </div>
                        <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                            <div className="col-3 col-sm-3 col-md-6 text-md-right">
                                <h6><strong>{product.price} <span class="text-muted">x</span></strong></h6>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4">
                                <div className="quantity">
                                    <input type="button" value="+" className="plus" />
                                    <input type="number" step="1" max="99" min="1" value="1" title="Qty" className="qty"
                                        size="4" />
                                    <input type="button" value="-" className="minus" />
                                </div>
                            </div>
                            <div className="col-2 col-sm-2 col-md-2 text-right">
                                <button type="button" className="btn btn-outline-danger btn-xs">
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    )
                })}
                <hr />

                <div className="card-footer">
                    <div className="pull-right">
                        <a href="" className="btn btn-success pull-right">Checkout</a>
                        <div className="pull-right">
                            Total price: <b>$</b>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}