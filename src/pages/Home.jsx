import React from 'react'
import "../style/home.css"
import { NavBar } from '../components/NavBar'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { Footer } from '../components/Footer';


export const Home = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <section id="inicio" className="inicio">
        <div className="contenido-banner">
          <div className="contenido-img">
            <img src="https://cdn-icons-png.flaticon.com/512/3067/3067287.png" alt="" />
          </div>
          <h1>NICOLAS MUÑOZ</h1>
          <h2>Ingeniero en Informatica</h2>
          <div className="redes">
            <a href="#"><i><FaFacebookF /></i></a>
            <a href="#"><i><FaLinkedin /></i></a>
            <a href="#"><i><FaInstagramSquare /></i></a>
          </div>
        </div>
      </section>
      <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
          <h2>Sobre mi</h2>
          <p><span>Hola, soy Nicolas Muñoz.</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Impedit saepe accusamus dicta odit quam vero placeat corporis, voluptates,
            repellat est ipsam distinctio rem. Ea, maiores vel. Dignissimos ab unde hic.</p>

          <div className="fila">
            {/**Datos personales  */}
            <div className="col">
              <ul>
                <li>
                  <strong>Fecha de nacimiento</strong>
                  30-04-2001
                </li>
                <li>
                  <strong>Telefono</strong>
                  +56977849093
                </li>
                <li>
                  <strong>Email</strong>
                  nicolejo2001@gmail.com
                </li>
              </ul>
            </div>
            {/**<!-- intereses -->*/}
            <div className="col">
              <h3>Intereses</h3>
              <div className="contenedor-intereses">
                <div className="intereses">
                  <i><CgGames /></i>
                  <span>Juegos</span>
                </div>
              </div>
              <div className="contenedor-intereses">
                <div className="intereses">
                  <i><MdOutlineSportsBasketball /></i>
                  <span>Deportes</span>
                </div>
              </div>
              <div className="contenedor-intereses">
                <div className="intereses">
                  <i><FaComputer /></i>
                  <span>Computacion</span>
                </div>
              </div>
              <div className="contenedor-intereses">
                <div className="intereses">
                  <i><FaBookReader /></i>
                  <span>Leer</span>
                </div>
              </div>
            </div>
          </div>
          <button>
            Descargar CV
            <span className="overlay"></span>
          </button>
        </div>
      </section>
        <Footer />
    </>
  )
}
