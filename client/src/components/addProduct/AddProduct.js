import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import { AddProductForm } from '../addProductFrom/AddProductForm';

export const AddProduct = () => {

    const [ values, setValues ] = useState({ 
        title: '',
        imageUrl: '',
        price: '',
        description: ''
     });

    const set = name => {
        return ({ target: { value } }) => {
            setValues(oldValues => ( { ...oldValues, [name]: value }))
        }
    }

    const handleSubmit = () => {
        fetch('http://localhost:5000/admin/add-product', {
            method: "POST",
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json'},
            redirect: "follow",
            
        })
            .then(response => response.json)
            .catch(err => console.log(err))
    }

    return (
        <Container className="add-products text-center">
            <AddProductForm values={values} set={set} handleSubmit={handleSubmit}/>
        </Container>
    );
};
