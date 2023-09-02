// DO NOT DELETE
import { Header } from './Header.jsx'
import { Description } from './Description.jsx'
import { DogImage } from './DogImage.jsx'
import { DogListContainer } from './DogListContainer.jsx'
import './App.css'
import React, { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Description />
      <DogListContainer />
    </div>
  )
}
