import React from 'react'
import { CarruselFinal } from '../components/CarruselFinal'
import { Card } from 'react-bootstrap'
import { NavBar } from '../components/NavBar'
import '../style/projects.css'
export const Projects = () => {
  return (
    <>
      <div><NavBar /></div>
      <h1 className='title'>Funciona</h1>
      <section>
        <div className='projects'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../assets/icon.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../assets/tic.png" />
            <Card.Body>
              <Card.Title>Tic-Tac</Card.Title>
              <Card.Text>
                <a href="https://silly-mandazi-9b224d.netlify.app/" style={{textDecoration:'none', color:'GrayText'}}>
                Proyecto realizado en React que recrea el juego tic-tac.
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../assets/icon.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../assets/icon.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
    </>

  )
}
