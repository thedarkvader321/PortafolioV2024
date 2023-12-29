import React from 'react'
import "../style/home.css"
import { NavBar } from '../components/NavBar'


export const Home = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <section id="inicio" class="inicio">
        <div className="contenido-banner">
          <div className="contenido-img">
            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7802931/computer-icon-clipart-md.png" alt="" />
          </div>
          <h1>NICOLAS MUÑOZ</h1>
          <h2>Ingeniero en Informatica</h2>
          <div className="redes">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
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
                  +9999999999
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
                  <i></i>
                  <span>Juegos</span>
                </div>
              </div>
              <div className="contenedor-intereses">
                <div className="intereses">
                  <i></i>
                  <span>Deportes</span>
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
    </>
  )
}
