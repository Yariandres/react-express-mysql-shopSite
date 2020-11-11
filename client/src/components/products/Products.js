import React from 'react';
import { useFetch } from '../hooks/useFetch';

import { ProductCard } from '../productCard/ProductCard';


import { Container } from 'react-bootstrap';

export const Products = () => {

    const { data, loading } = useFetch('http://localhost:5000/products');

    return (
        <div className="products">
            <Container>
                { loading ? <h1 className="text-center">Loading...</h1> : <ProductCard products={ data }/> }
            </Container>
        </div>
    );
};
