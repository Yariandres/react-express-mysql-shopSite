/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useLocation } from 'react-router-dom';

import { useFetch } from '../hooks/useFetch';

import { Container} from 'react-bootstrap';

import { CardDetails } from '../cardDetails/CardDetails';

export const ProductDetails = () => {

    const location = useLocation()
    const prodId = location.pathname.substr(10, 4);

    const { data, loading } = useFetch(`http://localhost:5000/products/${prodId}`);
  
    return (
        <div className="shop">
            <Container className="text-center">                
                { loading ? <h1 className="text-center">Loading product details</h1> : <CardDetails products={ data }/>}
            </Container>            
        </div>
    );
};