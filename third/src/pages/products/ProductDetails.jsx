import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../api/productAPI';
import { Container, Row, Col, Button, Card, Spinner } from 'react-bootstrap';

export function ProductDetails() {
  let [isLoading, setIsLoading] = useState(true);
  let [product, setProduct] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        let response = await getProductById(id);
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getProduct();
  }, []);

  const backToProducts = () => {
    navigate('/products');
  };

  return (
    <>
      {isLoading ? (
        <div className='text-center my-5'>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Container className='my-5'>
          <Row className='justify-content-center'>
            <Col md={10}>
              <Card className='shadow p-3'>
                <Row noGutters>
                  <Col md={6}>
                    <Card.Img 
                      variant="top" 
                      src={product.image} 
                      alt={product.productName} 
                      style={{ width: '100%', height: 'auto' }} 
                    />
                  </Col>
                  <Col md={6} className='d-flex flex-column justify-content-between p-4'>
                    <Card.Body className='text-center'>
                      <Card.Title className='display-4 mb-4'>{product.productName}</Card.Title>
                    </Card.Body>
                    <Card.Body className='text-start'>
                      <Card.Text className='lead'>Price: ${product.price}</Card.Text>
                      <Card.Text className='lead'>Quantity: {product.quantity} items</Card.Text>
                      <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                    <div className='text-end mt-auto'>
                      <Button variant='danger' onClick={backToProducts}>Back to Products</Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
