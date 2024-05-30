import React from 'react'
import logo from '../images/logo.png'
function Header() {
  return (
        <div className='flex flex-row justify-between mx-24'>
          <div className='w-full'>
            <a href="/" className="-m-1.5 p-1.5">
              <img className="w-[60px] h-[50px] sm:w-[100px] sm:h-[80px] md:w-[150px] md:h-[124px]" src={logo} alt="AW logo sml" />
            </a>
          </div>
          <div className='flex flex-row gap-4 md:gap-8 text-[10px] sm:text-xl  md:text-xl items-center justify-end font-medium'>
            <a href='#story'>Story</a>
            <a href='#services'>Services</a>
            <a href='#showroom'>Showroom</a>
            <a href='#sustainability'>Sustainability</a>
            <a href='#contact' className='rounded-full px-[24px] py-[14px]' style={{backgroundColor: '#FFCED2'}}>Contact</a>
          </div>
        </div>
  )
}

export default Header