import { React, Fragment } from 'react';
import { AppNav } from './components/AppNav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Shop } from './components/shop/Shop';
import { Products } from './components/products/Products';
import { Cart } from './components/cart/Cart';
import { Orders } from './components/orders/Orders';
import { AddProduct } from './components/addProduct/AddProduct';
import { AdminProducts } from './components/adminProducts/AdminProducts';

const App = () => {
    return (
        <Router>
            <Fragment>
                <AppNav/>

                <Switch>
                    <Route exact path='/shop' component={ Shop }/>
                    <Route exact path='/products' component={ Products }/>
                    <Route exact path='/cart' component={ Cart }/>
                    <Route exact path='/orders' component={ Orders }/>
                    <Route exact path='/add-product' component={ AddProduct }/>
                    <Route exact path='/admin-products' component={ AdminProducts }/>
                </Switch>
            </Fragment>        
        </Router>  
    );
}

export default App;
