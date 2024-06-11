import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';

export function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselImage 
          imageUrl="https://images.pexels.com/photos/11591941/pexels-photo-11591941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage 
          imageUrl="https://images.pexels.com/photos/6962206/pexels-photo-6962206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <CarouselImage 
          imageUrl="https://images.pexels.com/photos/14642112/pexels-photo-14642112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
