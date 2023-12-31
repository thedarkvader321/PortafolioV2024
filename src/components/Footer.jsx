import React from 'react'
import '../style/footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
export const Footer = () => {
    return (
        <>
            <footer>
                <a href="#inicio" className="arriba">
                    <FaArrowAltCircleUp />
                </a>
                <div className="redes">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaInstagramSquare /></a>
                </div>
            </footer>
        </>

    )
}
