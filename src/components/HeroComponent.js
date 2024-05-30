import React from 'react'
import heroImage from '../images/heroImage.png'
import dots from '../images/dots.png'
import './components.css'

function HeroComponent() {
  return (
    <div className='flex flex-row justify-between gap-10 my-10 mx-24 relative z-10'>
      <div className='w-3/4 py-10'>
        <div className='w-1/2'>
            <h1 className='text-6xl font-medium'>Fashion fits from the big brands.</h1>
        </div>
          <p className='mt-10 pr-16'>
          At AYA WYSS, we're not just a clothing and accessories design company - we're your reliable partner in fashion sourcing, production, and merchandising. With over two decades of experience rooted in textile engineering, we excel as a premier sourcing provider for fashion brands globally. From jersey to womenswear, our meticulous attention to detail ensures every piece bears the mark of quality. Join us as we shape the future of fashion sourcing.
          </p>
      </div>
      <div className='w-1/3 relative'>
          <img src={dots} className='absolute -mt-10 -ml-7 z-0' alt="Background Image 1" />
          <a href="/" className="z-10 relative block">
              <img src={heroImage} alt="Hero Image" />
          </a>
          <img src={dots} className='right-20 absolute -mr-28 -mt-44 z-0'></img>
      </div>
    </div>
  )
}

export default HeroComponent