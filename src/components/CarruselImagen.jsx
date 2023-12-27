import { Image } from "react-bootstrap";
export default CarruselImagen
function CarruselImagen({text}) {

    return (
        <Image
            src="/src/assets/icon.jpg"
            alt={text}
            style={{
                width: '500px',
                height: '500px'
            }} />
    )
}
