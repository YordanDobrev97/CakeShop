import React, { Component } from 'react';

export default class Basket extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            isLoading: false,
            totalPrice: 0,
        }
    }

    componentDidMount() {
        const storageProducts = { ...sessionStorage };

        const result = [];
        let totalPrice = 0;
        Object.entries(storageProducts).forEach(index => {
            const product = JSON.parse(index[1]);
            totalPrice += product.price;
            result.push(product);
        });

        this.setState(prevState => ({
            products: this.state.products.concat(result),
            isLoading: true,
            totalPrice: totalPrice,
        }));
    }

    increaseProductQuantity = (e) => {
        const id = e.target.id;
        const products = [...this.state.products];
        const currentProduct = products.find(x => x.id == id);

        if (!currentProduct.hasOwnProperty("oldPrice")) {
            currentProduct.oldPrice = currentProduct.price;
        }

        const price = this.state.totalPrice + currentProduct.oldPrice;
        currentProduct.price *= 2;
        currentProduct.count++;
        const index = products.indexOf(currentProduct);

        products.splice(index, 1);
        this.setState({
            products: [...this.state.products],
            totalPrice: price,
        })
    }

    decreaseProductQuantity = (e) => {
        const id = e.target.id;
        const products = [...this.state.products];
        const currentProduct = products.find(x => x.id == id);

        if (currentProduct.price / 2 > 0 && currentProduct.count - 1 > 0) {
            const price = this.state.totalPrice - currentProduct.oldPrice;
            currentProduct.price /= 2;
            currentProduct.count--;
            const index = products.indexOf(currentProduct);

            products.splice(index, 1);
            this.setState({
                products: [...this.state.products],
                totalPrice: price,
            })
        }
    }

    render() {
        if (!this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div className="card-body">
                {this.state.products.map(product => {
                    console.log(product);
                    return (<div className="row">
                        <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src={product.image} alt="prewiew" width="120" height="80" />
                        </div>
                        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                            <h4 className="product-name"><strong>{product.name}</strong></h4>
                        </div>
                        <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                            <div className="col-3 col-sm-3 col-md-6 text-md-right">
                                <h6><strong>Price: {product.price}</strong></h6>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4">
                                <div className="quantity">
                                    <input type="button" id={product.id} onClick={this.increaseProductQuantity} value="+" className="plus" />
                                    <input disabled type="number" step="1" max="99" min="1" value={product.count} title="Qty" className="qty" />
                                    <input type="button" id={product.id} onClick={this.decreaseProductQuantity} value="-" className="minus mb-md-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
                <hr />

                <div className="card-footer">
                    <div className="pull-right">
                        <button className="btn btn-success pull-right">Buy</button>
                        <div className="pull-right">
                            Total price: <b>${this.state.totalPrice}</b>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}