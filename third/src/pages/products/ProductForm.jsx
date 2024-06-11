import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { addNewProduct, editProduct, getProductById } from '../../api/productAPI';
import { useSnackbar } from '../../components/SnackBarProvider';

export function ProductForm() {
  let [ formData, setFormData ] = useState({ productName: '', price: '', quantity: '' });
  const navigator = useNavigate();
  const { id } = useParams();
  const { showSnackbar } = useSnackbar();

    useEffect( () => {
        if ( id !== 0 ) {
            getProductById( id ).then( response => {
                setFormData( response.data )
            } ).catch( error => {
                console.log( error )
            } )
        }
    }, [] )

    useEffect( () => {
        console.log( formData )
    }, [ formData ] )


    const formHandler = ( e ) => {
        setFormData( {
            ...formData,
            [ e.target.name ]: e.target.value
        } )
    }


    const addHandler = ( e ) => {
        e.preventDefault();
        if ( id == 0 ) {
            addNewProduct( formData ).then( () => {
            navigator( '/products' )
            showSnackbar(`${formData.productName} Added successfully!`, 'success');
          } ).catch( error => {
            showSnackbar(`Failed to add the ${formData.productName}!`, 'error');
            console.log( error );
          } )
        } else {
          editProduct( id, formData ).then( () => {
            navigator( '/products' )
            showSnackbar(`Product data has been updated successfully!`, 'success');
          } ).catch( error => {
            showSnackbar(`Failed to update product: ${formData.productName}!`, 'error');
            console.log( error );
          } )
        }
    }
  return (
    <Container className="mt-5">
      <h2 className="mb-4">{id == 0 ? 'Add New Product' : 'Edit Product'}</h2>
      <Form onSubmit={addHandler}>
        <Form.Group className="mb-3" controlId="formProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Name"
            name="productName"
            value={formData.productName}
            onChange={formHandler}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Price"
            name="price"
            value={formData.price}
            onChange={formHandler}
            required
            min="0"
            step="0.01"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Quantity"
            name="quantity"
            value={formData.quantity}
            onChange={formHandler}
            required
            min="0"
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="w-25 mb-5">
          {id == 0 ? 'Add New Product' : 'Edit Product'}
        </Button>
      </Form>
    </Container>
  );
}
