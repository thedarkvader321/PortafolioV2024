import React from 'react'
import { CardProject } from '../components/CardProject'
import { NavBar } from '../components/NavBar'
import '../style/projects.css'
import { Footer } from '../components/Footer'
export const Projects = () => {
  return (
    <>
      <NavBar />
      <h1 className='title'>Projects</h1>
      <section className='projects-container'>
        <CardProject
          imgUrl="https://drive.google.com/uc?export=view&id=1S0bHkU4Br2jFW6ATnWvMekCkcRMavYnW"
          title="Tic-Tac"
          text="Some quick example text for card 1"
          link="https://demotictac.netlify.app/"
        />
        <CardProject
          imgUrl="https://drive.google.com/uc?export=view&id=1mEMqs48YEtTpgmpIW4viaO7tP0YxBTk4"
          title="Games wiki"
          text="Sitio creado mediante react para dar informacion de diversos generos de videojuegos(En proceso)"
          link="https://cozy-jelly-ffee42.netlify.app/"
        />
        <CardProject
          imgUrl="https://drive.google.com/uc?export=view&id=1gNNbDZkvIddby3rqulQyNk8CZ8N_E5m_"
          title="Tarjetas Expandibles"
          text="Ejemplo de tarjetas expandibles"
          link="https://thedarkvader321.github.io/tarjetas-expandibles/"
        />
        <CardProject
          imgUrl="https://drive.google.com/uc?export=view&id=1yvMdrJffQuFaVtGK9HGSQa6CNlJbp6PM"
          title="Tic-Tac"
          text="Ejemplo de animacion de un menu de navegacion"
          link="https://thedarkvader321.github.io/animacion-de-navegacion-giratoria/"
        />
        {/*<CardProject
          imgUrl="https://drive.google.com/uc?export=view&id=1S0bHkU4Br2jFW6ATnWvMekCkcRMavYnW"
          title="Tic-Tac"
          text="Some quick example text for card 1"
  />*/}
        {/*<CardProject
          imgUrl="https://drive.google.com/uc?export=view&id=1S0bHkU4Br2jFW6ATnWvMekCkcRMavYnW"
          title="Tic-Tac"
          text="Some quick example text for card 1"
/>*/}
        {/*<CardProject
          imgUrl="https://drive.google.com/uc?export=view&id=1S0bHkU4Br2jFW6ATnWvMekCkcRMavYnW"
          title="Tic-Tac"
          text="Some quick example text for card 1"
        />*/}
      </section>
      <Footer />
    </>

  )
}
