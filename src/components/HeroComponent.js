import React from 'react'
import heroImage from '../images/heroImage.png'
import dots from '../images/dots.png'
import './components.css'

function HeroComponent() {
  return (
    <div className='md:flex md:flex-row justify-between my-10 mx-24 relative z-10'>
      <div className='md:w-1/2 lg:py-10'>
        <div className='md:w-1/2'>
            <h1 className='text-xl lg:text-3xl xl:text-5xl font-medium text-center md:text-start'>Fashion fits from the big brands.</h1>
        </div>
          <p className='mt-10 lg:pr-16 text-[10px] lg:text-[12px] xl:text-base'>
          At AYA WYSS, we're not just a clothing and accessories design company - we're your reliable partner in fashion sourcing, production, and merchandising. With over two decades of experience rooted in textile engineering, we excel as a premier sourcing provider for fashion brands globally. From jersey to womenswear, our meticulous attention to detail ensures every piece bears the mark of quality. Join us as we shape the future of fashion sourcing.
          </p>
      </div>
      <div className='md:w-1/2 relative mt-20 md:mt-0 flex justify-center md:block '>
          <img src={dots} className='absolute hidden md:block -mt-10 right-56 z-0 ' alt="Background Image 1" />
          <img src={dots} className='absolute hidden md:block md:mt-60 md:-right-8 z-0'></img>
          <a href="/" className="z-10 relative block flex justify-end">
              <img src={heroImage} alt="Hero Image" className='w-[330px] relative z-10' />
          </a>
      </div>
    </div>
  )
}

export default HeroComponent