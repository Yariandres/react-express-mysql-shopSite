import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const AddProductForm = ({ values, set, handleSubmit }) => {
    return (
        <Form
                onSubmit={ handleSubmit }
                style={{ width: '30rem', display: 'inline-block'}} 
                className="mt-5"
            >
                <Form.Group controlId="formBasicTitle">
                    <Form.Label style={{ float: 'left' }}>Title</Form.Label>

                    <Form.Control 
                        type="text" 
                        placeholder="Enter title"
                        value={values.title}
                        onChange={set('title')}
                    />     
                </Form.Group>

                <Form.Group controlId="formBasicUrl">
                    <Form.Label style={{ float: 'left' }}>Image Url</Form.Label>

                    <Form.Control 
                        type="text" 
                        placeholder="Enter Url"
                        value={values.imageUrl}
                        onChange={set('imageUrl')}
                        
                    />     
                </Form.Group>
            
                <Form.Group controlId="formBasicPrice">
                    <Form.Label style={{ float: 'left' }}>Price</Form.Label>

                    <Form.Control 
                        type="number" 
                        placeholder="Price"
                        value={values.price}
                        onChange={set('price')}                        
                    />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{ float: 'left' }}>Description</Form.Label>
                    
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        value={values.description}
                        onChange={set('description')}
                    />
                </Form.Group>
              
                <Button variant="primary" type="submit">
                    Add Product
                </Button>
            </Form>
    )
};