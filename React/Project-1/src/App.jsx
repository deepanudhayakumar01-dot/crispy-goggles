import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Services from './Services'
import Contact from './Contact'
import Login from './Login'
import Dashboard from './Dashboard'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/services" element={<Services />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/login" element={<Login/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
         
      </Routes>
    </>
  )
}

export default App
