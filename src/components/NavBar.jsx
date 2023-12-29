import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router';


export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Nicolas Munoz</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href=""onClick={() => navigate('/')}>Home</Nav.Link>
                        <Nav.Link href="/Projects"onClick={() => navigate('../pages/Projects.jsx')} >Projects</Nav.Link>
                        <Nav.Link href="/Contact" onClick={() => navigate('../pages/Contact.jsx')}>Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
