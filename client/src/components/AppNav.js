import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './appNav.css';

export const AppNav = () => {
    return (
        <header className="nav">
            <Container>
                <Navbar bg="light" variant="light">
                    <Link href="/home">MyShop</Link>

                    <Nav className="m-auto">
                        <Link to="/">Shop</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/add-product">Add Product</Link>
                        <Link to="/admin-products">Admin Products</Link>
                    </Nav>            
                </Navbar>          
            
            </Container>
        </header>
    );
};