import { useState } from 'react'
import Navbar from './Component/NavBar/Navbar'
import Header from './Component/Header/Header'
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
