import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarruselImagen from './CarruselImagen';

 const Carrusel = ({ images }) => {
  return (
    <>
      <Carousel>
        {images.map((product) => (
          <Carousel.Item key={product.id}>
            <CarruselImagen text={product.name} src={product.imgUrl}/>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Carrusel;