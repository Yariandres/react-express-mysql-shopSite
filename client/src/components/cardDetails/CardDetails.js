import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Row, Col } from 'react-bootstrap';

import './cardDetails.css'

export const CardDetails = ({ products }) => {
    return (  
        <Card className="mt-5 product-details" style={{ width: '40rem', display: 'inline-block' }}>
            <Card.Img variant="top" src={products.imageUrl} />
            <Card.Body>
                <Card.Title>{products.title}</Card.Title>

                <Card.Text>
                    {products.description}
                </Card.Text>

                <Link to="/cart" className="btn btn-outline-success ml-3">Add to Cart</Link>
            </Card.Body>

            <Card.Footer>
                <small className="text-muted">Created date: {products.createdAt}</small>
            </Card.Footer>            
        </Card>               
    );       
};