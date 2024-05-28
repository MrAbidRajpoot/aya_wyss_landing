import React from 'react'
import logo from '../images/logo.png'
function Footer() {
  return (
    <nav>
        <div className='flex flex-row justify-start '>
          <a href="/" className="w-1/2">
            <img className="w-[150px] h-[124px]" src={logo} alt="AW logo sml" />
          </a>
          <div className='flex text-base items-center '>
              <p>© Aya Wyss 2024</p>
          </div>
        </div>
    </nav>
  )
}

export default Footer