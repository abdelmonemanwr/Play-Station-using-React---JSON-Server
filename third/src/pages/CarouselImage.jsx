import React from 'react';
import { Image } from 'react-bootstrap';

const CarouselImage = ({ imageUrl }) => {
  return (
    <div style={{ textAlign: 'center', height: '100vh', overflow: 'hidden' }}>
      <Image src={imageUrl} style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
    </div>
  );
}

export default CarouselImage;
