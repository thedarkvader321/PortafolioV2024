import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import '../style/contact.css'

export const Contact = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSending, setIsSending] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()
        setIsSending(true)

        try{
            const mail = new Mail()
            mail.setFrom(name + '<' + email + '>')
            mail.addTo('nicolejo2001@gmail.com')
            mail.setSubject('New Contact Form Submission');
            mail.setText(message);

            await mail.send();

            // Clear form fields and display a success message
            setName('');
            setPhone('');
            setEmail('');
            setMessage('');
            alert('Message sent successfully!');
        } catch (error) {
            console.log(error)
            alert('Failed to send message. Please try again.');
        } finally{
            setIsSending(false)
        }
    }
    return (
        <>
            <NavBar />
            <section className='contacto'>
                <div className='contenido-seccion'>
                    <h2>Contact</h2>
                    <div className="fila">
                        <div className="col">
                            <input type="text" placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)}/>
                            <input type="text" placeholder='Telefono' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            <input type="text" placeholder='Correo Electronico' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
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
