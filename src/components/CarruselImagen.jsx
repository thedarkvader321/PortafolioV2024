import React from "react";
import { Image } from "react-bootstrap";
export default CarruselImagen

function CarruselImagen({ text, src }) {
    return (
        <>
            <div className="carrusel">
                <Image
                    src={src}
                    alt={text}
                    className="carousel-image"
                    style={{
                        width: '100%',
                        height: '500px',
                    }} />
            </div></>

    )
}
