/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useFetch } from '../hooks/useFetch';


import {Container} from 'react-bootstrap';

import { ProductCard } from '../productCard/ProductCard';

export const Shop = () => {

    const { data, loading } = useFetch('http://localhost:5000');

  
    return (
        <div className="shop">
            <Container>
                { loading ? <h1>Loading...</h1> : <ProductCard products={data}/> }
            </Container>            
        </div>
    );
};
