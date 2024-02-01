import React from 'react'
import Contact from './contact'
import About from './about'
import Services from './services'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
    </>
  
  )
}

export default App
