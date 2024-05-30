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
    <div>
    <Header/>
    <div>
    <HeroComponent/>
    <Story/>
    </div>
    <Services/>
    <div className='bg-[#FFF9F0] pb-20 showroom_section'>
      <Showroom/>
      <Sustainability/>
    </div>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default LandingPage