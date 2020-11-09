import React from 'react';
import { useFetch } from '../hooks/useFetch';

import { CardDetails } from '../cardDetails/CardDetails';

import { Container } from 'react-bootstrap';

export const Products = () => {

    const { data, loading } = useFetch('http://localhost:5000');

    return (
        <div className="products">
            <Container>
                { loading ? <h1 className="text-center">Loading...</h1> : <CardDetails products={ data }/> }
            </Container>
        </div>
    );
};
