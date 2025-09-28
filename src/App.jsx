import { useState } from 'react'
import Navbar from './Component/NavBar/navbar'
import Header from './Component/Header/header'
import Right from './Component/rightSide/Rights'

function App() {

  return (
    <>
      <Navbar/>
      <div style={{display: 'flex'}}>
      <Header/>
      <Right/>
      </div>
    </>
  )
}

export default App
