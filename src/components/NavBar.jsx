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
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="" onClick={()=> navigate('/src/pages/Projects.jsx')}>Proyects</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
