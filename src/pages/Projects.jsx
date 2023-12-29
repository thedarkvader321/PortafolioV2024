import React from 'react'
import { CardProject } from '../components/CardProject'
import { NavBar } from '../components/NavBar'
import '../style/projects.css'
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
      </section>
    </>

  )
}
