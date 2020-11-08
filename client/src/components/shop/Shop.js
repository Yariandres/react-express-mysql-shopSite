import {React, useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';

const fetchUrl = 'http://localhost:5000';
const getPords = () => fetch(fetchUrl).then(res => res.json());

export const Shop = () => {

    const [ products, setProducts ] = useState([]);
    const [ isloading, setIsloading ] = useState(true);

    useEffect(() => {
        getPords().then(prods => setProducts(prods));
    }, []);

    return (
        <div className="shop">
        <Container>
            {console.log(products.products)}
            <h1>This is the Shop component</h1>

        </Container>
            
        </div>
    );
};
