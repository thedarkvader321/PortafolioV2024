import React from 'react'
import { NavBar } from '../components/NavBar'
import { CarruselFinal } from '../components/CarruselFinal'
import "../style/home.css"
export const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <CarruselFinal />
      </div>

    </>
  )
}
