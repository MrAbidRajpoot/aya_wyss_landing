import { Input } from '@material-tailwind/react'
import React from 'react'

function Contact() {
  return (
    <section id='contact' className='bg-slate-100'>
      <h1 className='text-5xl font-medium' style={{color: '#A91079'}}>Contact</h1>
      <div className='mt-10'>
        <div className='flex items-center border-2 border-[#A91079] rounded-lg p-1 pl-2 w-1/3 gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#A91079" class="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
            </svg>
            <p className=''>info@ayawyss.com</p>
          </div>
          <div className='flex items-center border-2 border-[#A91079] rounded-lg p-1 pl-2 w-1/3 gap-2 mt-5'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill='#A91079'>
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
          </svg>
            <p className=''>+44(0)7595985949</p>
          </div>
          <div className='flex items-center border-2 border-[#A91079] rounded-lg p-1 pl-2 max-w-fit gap-2 mt-5'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16" fill='#A91079'>
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
          </svg>
            <p className=''>
            86-90 Paul Street, London, United Kingdom, EC2A 4NE
            </p>
        </div>
        <div className='mt-10'>
          <form>
              <Input variant="static" label="Static" placeholder="Static" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact