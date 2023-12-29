import React from 'react'
import { NavBar } from '../components/NavBar'
import '../style/contact.css'

export const Contact = () => {
    return (
        <>
            <NavBar />
            <section className='contacto'>
                <div className='contenido-seccion'>
                    <h2>Contact</h2>
                    <div className="fila">
                        <div className="col">
                            <input type="text" placeholder='Nombre' />
                            <input type="text" placeholder='Telefono'/>
                            <input type="text" placeholder='Correo Electronico'/>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
                            <button>Enviar
                                <span className='overlay'></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
