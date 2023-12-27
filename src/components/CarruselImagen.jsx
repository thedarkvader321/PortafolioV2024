import { Image } from "react-bootstrap";
export default CarruselImagen
function CarruselImagen({text}) {

    return (
        <Image
            src="https://en.gundam.info/about-gundam/series-pages/seedfreedom/gseedfreedom/en/product/2023/10/hg_rising_freedom_gundam_01m_en.jpg"
            alt={text}
            style={{
                width: '100%',
                height: '100%'
            }} />
    )
}
