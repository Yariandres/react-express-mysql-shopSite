import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Row, Col } from 'react-bootstrap';

import './productCard.css';

export const ProductCard = ({ products }) => {

    return (
        <Row>
            { products.map(item => (
                <Col sm={3} key={item.id}>          
                    <Card className="mt-5">
                        <Card.Img variant="top" src={item.imageUrl} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>

                            <Card.Text>
                                {item.description}
                            </Card.Text>

                            <Link to={{
                                pathname: `/products/${item.id}`
                            }} className="btn btn-outline-primary">Details</Link>

                            <Link to="/cart" className="btn btn-outline-success ml-3">Add to Cart</Link>
                        </Card.Body>

                        <Card.Footer>
                            <small className="text-muted">Created date: {item.createdAt}</small>
                        </Card.Footer>
                    </Card>
                </Col>
            )) }
        </Row>
    );       
};
