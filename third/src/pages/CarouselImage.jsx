import React from 'react';
import { Image } from 'react-bootstrap';

const CarouselImage = ({ imageUrl }) => {
  return (
    <div style={{ textAlign: 'center', height: '90vh', overflow: 'hidden' }}>
      <Image src={imageUrl} style={{ width: '100%', height: '100%', objectFit: 'fill', filter: 'brightness(74%)' }} />
    </div>
  );
}

export default CarouselImage;
