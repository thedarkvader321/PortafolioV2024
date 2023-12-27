import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarruselImagen from './CarruselImagen';

export const Carrusel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <CarruselImagen text="Primera diapositiva" />
          <Carousel.Caption>
            <h3>Etiqueta de la primera diapositiva</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarruselImagen text="Segunda diapositiva" />
          <Carousel.Caption>
            <h3>Etiqueta de la segunda diapositiva</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarruselImagen text="Tercera diapositiva" />
          <Carousel.Caption>
            <h3>Etiqueta de la tercera diapositiva</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
