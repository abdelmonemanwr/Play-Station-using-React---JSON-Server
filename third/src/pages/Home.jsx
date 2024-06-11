import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {
  return (
    <Carousel style={{ height: '100vh' }}>
      <Carousel.Item style={{ height: '100%' }}>
        <CarouselImage 
          imageUrl="https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '100%' }}>
        <CarouselImage 
          imageUrl="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item style={{ height: '100%' }}>
        <CarouselImage 
          imageUrl="https://images.pexels.com/photos/3945655/pexels-photo-3945655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
