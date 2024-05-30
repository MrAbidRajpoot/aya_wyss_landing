import React, { useRef } from 'react'
import dots from '../../images/dots.png'
import './contact.css'
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t95gdmh', 'template_bsvrvpu', form.current, {
        publicKey: '3ErxCtV0DsW6NrATf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      form.current.reset();
  };

  return (
    <section id='contact' className=' mx-16 mt-20'>
      <img src={dots} alt="" style={{position: 'absolute'}}></img>
      <div className='bg-[#F4F5FF] m-8 top-10 rounded-lg pb-20 z-10' style={{position: 'relative'}}>
      <h1 className='text-5xl font-medium' style={{color: '#A91079'}}>Contact</h1>
      <div className='mt-10'>
        <div className='flex items-center border-2 border-[#A91079] rounded-lg p-1 px-4 max-w-fit gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#A91079" class="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
            </svg>
            <p className=''>info@ayawyss.com</p>
          </div>
          <div className='flex items-center border-2 border-[#A91079] rounded-lg p-1 px-4 max-w-fit gap-2 mt-5'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill='#A91079'>
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
          </svg>
            <p className=''>+44(0)7595985949</p>
          </div>
          <div className='flex items-center border-2 border-[#A91079] rounded-lg p-1 px-4 max-w-fit gap-2 mt-5'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16" fill='#A91079'>
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
          </svg>
            <p className=''>
            86-90 Paul Street, London, United Kingdom, EC2A 4NE
            </p>
        </div>
        <div className='mt-10 flex justify-end'>
        <form ref={form} class="space-y-10  w-2/3">
          <div class="relative border-b-2 border-[#A91079]">
            <input type="text" name="username" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
            <label for="username" class="absolute top-0 duration-300 origin-0">Username</label>
          </div>
          <div class="relative border-b-2 border-[#A91079]">
            <input type="text" name="email" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
            <label for="email" class="absolute top-0 duration-300 origin-0">Email</label>
          </div>
          <div class="relative border-b-2 border-[#A91079]">
            <input type="text" name="message" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
            <label for="message" class="absolute top-0 duration-300 origin-0">Message</label>
          </div>
          <div>
            <button className='bg-[#A91079] text-white p-3 px-8 rounded-lg flex flex-row items-center gap-2' onClick={sendEmail}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9472 1.02871C24.0017 0.892413 24.0151 0.743103 23.9856 0.599288C23.9561 0.455474 23.885 0.32348 23.7812 0.21967C23.6774 0.11586 23.5454 0.0448002 23.4016 0.015299C23.2578 -0.0142021 23.1085 -0.000846891 22.9722 0.0537091L1.15169 8.78221H1.15019L0.472186 9.05221C0.343771 9.10343 0.232014 9.18915 0.149259 9.2999C0.0665044 9.41066 0.0159727 9.54213 0.00324586 9.67979C-0.00948095 9.81746 0.0160924 9.95597 0.0771412 10.08C0.13819 10.2041 0.232338 10.3088 0.349186 10.3827L0.964186 10.7727L0.965686 10.7757L8.45819 15.5427L13.2252 23.0352L13.2282 23.0382L13.6182 23.6532C13.6923 23.7696 13.7971 23.8633 13.9211 23.924C14.045 23.9846 14.1833 24.0099 14.3207 23.997C14.4581 23.9842 14.5893 23.9336 14.6998 23.851C14.8104 23.7684 14.896 23.6569 14.9472 23.5287L23.9472 1.02871ZM21.1977 3.86371L9.95669 15.1047L9.63419 14.5977C9.57509 14.5047 9.49622 14.4258 9.40319 14.3667L8.89618 14.0442L20.1372 2.80321L21.9042 2.09671L21.1992 3.86371H21.1977Z" fill="#EEEEEE"/>
            </svg>
            Send
            </button>
          </div>
        </form>
        </div>
      </div>
      </div>
      <img src={dots} className='right-16 absolute -mt-44 z-0'></img>
    </section>
  )
}

export default Contact