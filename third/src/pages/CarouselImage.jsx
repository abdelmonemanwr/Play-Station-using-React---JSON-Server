import React from 'react';
import { Image } from 'react-bootstrap';

const CarouselImage = ({ imageUrl }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Image src={imageUrl} />
    </div>
  );
}

export default CarouselImage;
