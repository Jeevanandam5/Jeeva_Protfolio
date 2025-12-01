import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Project from '../components/Project'

const Home = () => {
  return (
    <main className='min-h-screen'>
        <HeroSection/>
        <About/>
        <Project/>
        <Contact/>
    </main>
  )
}

export default Home