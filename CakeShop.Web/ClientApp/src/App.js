import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import { Layout } from './components/Layout';

import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css';
import Home from './components/Home';
import AddProduct from './components/Products/AddProduct';
import Details from './components/Products/Details';
import Basket from './components/Basket/Basket';
import Products from './components/Products/ListProducts';
import About from './components/About/About';

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/addProduct' component={AddProduct} />
                    <Route path='/details/:id' component={ Details }/>
                    <Route path='/basket' component={ Basket }/>
                    <Route path='/products' component={ Products }/>

                    <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
                </Switch>
            </Layout>
        );
    }
}
