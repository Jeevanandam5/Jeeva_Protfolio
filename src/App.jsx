import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Contact from './components/Contact'
import About from './components/About'
import Project from './components/Project'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Project/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  )
}

export default App