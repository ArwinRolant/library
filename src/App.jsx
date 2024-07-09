import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <br></br>
     
     <h1 style={{ fontSize: '3.2em', textAlign: 'center', color: '#666', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', fontFamily: 'Roboto, sans-serif' }}>Welcome to Library</h1>
    < Navbar/>
    <br></br>
    <Home/>
   
      </>
   
  )
}

export default App