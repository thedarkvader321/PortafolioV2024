import React from 'react'
import { CardProject } from '../components/CardProject'
import { NavBar } from '../components/NavBar'
import '../style/projects.css'
export const Projects = () => {
  return (
    <>
      <div><NavBar /></div>
      <h1 className='title'>Funciona</h1>
      <section>
        <div className='projects'>
          <CardProject
            imgUrl="https://drive.google.com/uc?export=view&id=1S0bHkU4Br2jFW6ATnWvMekCkcRMavYnW"
            title="Tic-Tac"
            text="Some quick example text for card 1"
          />
          <CardProject
            imgUrl="https://drive.google.com/uc?export=view&id=1S0bHkU4Br2jFW6ATnWvMekCkcRMavYnW"
            title="Tic-Tac"
            text="Some quick example text for card 1"
          />
          <CardProject
            imgUrl="https://drive.google.com/uc?export=view&id=1S0bHkU4Br2jFW6ATnWvMekCkcRMavYnW"
            title="Tic-Tac"
            text="Some quick example text for card 1"
          />
        </div>
      </section>
    </>

  )
}
