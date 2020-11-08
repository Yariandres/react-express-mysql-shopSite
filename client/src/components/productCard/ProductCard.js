import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Row, Col } from 'react-bootstrap';

import './productCard.css';

export const ProductCard = prodItem => {

    return (
        <Row>
            { prodItem.prodItem.map(item => (
                <Col sm={3}>          
                    <Card className="mt-5">
                        <Card.Img variant="top" src={item.imageUrl} />

                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>

                            <Card.Text>
                                {item.description}
                            </Card.Text>

                            <Link to="/products" className="btn btn-outline-primary">Details</Link>
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
