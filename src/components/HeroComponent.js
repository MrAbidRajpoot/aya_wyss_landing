import React from 'react'
import heroImage from '../images/heroImage.png'

function HeroComponent() {
  return (
    <div className='flex flex-row justify-between gap-10 my-10'>
      <div className='w-3/4 py-10'>
        <div className='w-2/3'>
            <h1 className='text-6xl font-medium pr-40'>Fashion fits from the big brands.</h1>
        </div>
          <p className='mt-10 pr-16'>
          At AYA WYSS, we're not just a clothing and accessories design company - we're your reliable partner in fashion sourcing, production, and merchandising. With over two decades of experience rooted in textile engineering, we excel as a premier sourcing provider for fashion brands globally. From jersey to womenswear, our meticulous attention to detail ensures every piece bears the mark of quality. Join us as we shape the future of fashion sourcing.
          </p>
      </div>
      <div className=''>
          <a href="/" className="">
            <img className="w-auto " src={heroImage} alt="Hero Image" />
          </a>
      </div>
    </div>
  )
}

export default HeroComponent