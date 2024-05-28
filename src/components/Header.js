import React from 'react'
import logo from '../images/logo.png'
function Header() {
  return (
    <nav>
        <div className='flex flex-row justify-between'>
        <a href="/" className="-m-1.5 p-1.5">
            <img className="w-[150px] h-[124px]" src={logo} alt="AW logo sml" />
          </a>
          <div className='flex flex-row gap-8 text-xl items-center font-medium'>
           <a href='#story'>Story</a>
           <a href='#services'>Services</a>
           <a href='#showroom'>Showroom</a>
           <a href='#sustainability'>Sustainability</a>
           <a href='#contact' className='rounded-full px-[24px] py-[14px]' style={{backgroundColor: '#FFCED2'}}>Contact</a>
          </div>
            
        </div>
    </nav>
  )
}

export default Header