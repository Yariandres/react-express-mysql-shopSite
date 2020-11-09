import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './appNav.css';

export const AppNav = () => {
    return (
        <header className="nav">
            <Container>
                <Navbar bg="light" variant="light" className="py-5">
                    <Nav className="m-auto">
                        <Link to="/" className="mr-3 p-3">Shop</Link>
                        <Link to="/products" className="mr-3 p-3">Products</Link>
                        <Link to="/cart" className="mr-3 p-3">Cart</Link>
                        <Link to="/orders" className="mr-3 p-3">Orders</Link>
                        <Link to="/add-product" className="mr-3 p-3">Add Product</Link>
                        <Link to="/admin-products" className="mr-3 p-3">Admin Products</Link>
                    </Nav>            
                </Navbar>          
            
            </Container>
        </header>
    );
};