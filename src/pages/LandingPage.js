import React from 'react'
import Header from '../components/Header'
import Story from '../components/Story'
import Showroom from '../components/Showroom'
import Services from '../components/Services'
import Sustainability from '../components/Sustainability'
import Contact from './contact/Contact'
import Footer from '../components/Footer'
import HeroComponent from '../components/HeroComponent'

function LandingPage() {
  return (
    <div className='mx-20'>
    <Header/>
    <HeroComponent/>
    <Story/>
    <Services/>
    <Showroom/>
    <Sustainability/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default LandingPage