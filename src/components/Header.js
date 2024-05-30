import React, { useState } from 'react'
import logo from '../images/logo.png'
function Header() {
  const [mobile_open , setMobileOpen] = useState(false)

  const mobileMenu = () => {
    mobile_open ? setMobileOpen(false) : setMobileOpen(true)
  }


  return (
    <>
        <div className='md:flex md:flex-row justify-between md:mx-24 hidden'>
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
        <div className='md:hidden flex flex-row justify-between items-center'>
              <img className="w-[60px] h-[50px] sm:w-[100px] sm:h-[80px] md:w-[150px] md:h-[124px]" src={logo} alt="AW logo sml" />
              <button className='bg-slate-200 p-1 rounded' onClick={mobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
              </svg>
              </button>
        </div>
        {
          mobile_open ? (
            <div className='right-0 top-9 absolute z-20 h-screen' style={{width:'250px'}}>
                <div className='bg-slate-200 rounded-l-lg h-full'>
                    <ul className='flex flex-col'>
                        <a href='#story' className='border-b-2 border-slate-300 hover:bg-slate-300 p-3 pl-4'>Story</a>
                        <a href='#services' className='border-b-2 border-slate-300 hover:bg-slate-300 p-3 pl-4'>Services</a>
                        <a href='#showroom' className='border-b-2 border-slate-300 hover:bg-slate-300 p-3 pl-4'>Showroom</a>
                        <a href='#sustainability' className='border-b-2 border-slate-300 hover:bg-slate-300 p-3 pl-4'>Sustainability</a>
                        <a href='#contact' className='border-b-2 border-slate-300 hover:bg-slate-300 p-3 pl-4'>Contact</a>
                    </ul>
                </div>
            </div>
          ) : null
        }
        
      </>
  )
}

export default Header