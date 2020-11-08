import {React, useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';

import { ProductCard } from '../productCard/ProductCard';

const fetchUrl = 'http://localhost:5000';
const getPords = () => fetch(fetchUrl).then(res => res.json());

export const Shop = () => {

    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsloading ] = useState(true);

    useEffect(() => {
        getPords().then(prods => {
            setProducts(prods);
            setIsloading(false);
        });
    }, []);

    const prodItem = products.products;

    return (
        <div className="shop">
            <Container>
                { isLoading ? <h1>Loading...</h1> : <ProductCard prodItem={prodItem}/> }
            </Container>            
        </div>
    );
};
