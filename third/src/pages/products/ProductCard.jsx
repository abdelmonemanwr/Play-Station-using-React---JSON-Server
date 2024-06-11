import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function ProductCard({ product, deleteHandler }) {
  return (
    <Card className="m-2 d-flex flex-column" style={{ width: '100%' }}>
      <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.productName} 
        style={{ height: '200px', objectFit: 'contain', padding: '10px' }} 
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>
          Price: ${product.price} <br />
          Quantity: {product.quantity} items <br />
          Rating: {product.stars} stars
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Link to={`/products/${product.id}`}>
            <Button variant="warning">View</Button>
          </Link>
          <Link to={`/products/${product.id}/edit`}>
            <Button variant="info">Edit</Button>
          </Link>
          <Button variant="danger" onClick={() => deleteHandler(product.id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
