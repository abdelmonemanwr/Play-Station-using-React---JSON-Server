import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { removeFromCart } from '../../store/cartSlice';

export function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id));
  };
  let quantity = 1;
  return (
    <Container className="mt-5">
      <h2>Cart</h2>
      <ListGroup>
        {cartItems.map(item => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src={item.image} alt={item.productName} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
              <div>
                <h5>{item.productName}</h5>
                <p>Price: ${item.price}</p>
                {/* <p>Items: {quantity}</p> */}
              </div>
            </div>
            <Button variant="danger" onClick={() => handleRemoveFromCart(item)}>Remove</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
