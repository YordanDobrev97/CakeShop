import React, { Component } from 'react';
import Form from '../Form/Form';

import Section from '../Section/Section';
export default class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: '',
            price: 0,
            quantity: 0,
            image: ''
        }
    }

    addProduct = () => {
        const product = this.state.product;
        const price = this.state.price;
        const quantity = this.state.quantity;
        const image = this.state.image;

        const data = {
            product: product,
            price: price,
            quantity: quantity,
            image: image,
        };

        fetch('https://localhost:44326/api/products/add', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });

    }

    getInputValue = (name, value) => {
        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <Section className="min-vh-100">
                <div className="container">
                    <div className="row text-dark">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                            <div className="px-2">
                                <Form getInputValue={this.getInputValue.bind(this)}>
                                    <input type="text" name="product" className="form-control" placeholder="Product name" />
                                    <input type="number" name="price" step="0.01" className="form-control" placeholder="Price" />
                                    <input type="number" name="quantity" className="form-control" placeholder="Quantity" />
                                    <input type="text" name="image" className="form-control" placeholder="Image Url" />
                                </Form>
                                <button type="submit" onClick={this.addProduct} className="btn btn-primary btn-lg">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        )
    }
}