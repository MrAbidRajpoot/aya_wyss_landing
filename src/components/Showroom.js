import React from 'react'
import logo from '../images/logo.png'

function Showroom() {
  return (
    <section id='showroom' className='mt-32 mb-[700px] flex justify-center'>
      <div className='w-[300px] h-[140px] md:w-[584px] bg-[#EDF2F7] md:h-[247px] absolute'>
        <div className='w-[250px] h-[300px] md:w-[450px] bg-[#667EEA] md:h-[507px] absolute mt-6 ml-7 md:ml-20 drop-shadow-xl'>
          <div className='bg-[#FFF9F0] w-[250px] h-[300px] md:w-[450px] md:h-[507px] -m-1 pt-6 drop-shadow-xl'>
          <div class="container flex justify-center items-center">
            <img src={logo} alt='Logo' className='w-[40px] md:w-[73px] md:h-[50px]'></img>
          </div>
            <h1 className='text-xl md:text-4xl font-bold text-[#667EEA] text-center'>Showroom</h1>
            <h1 className='text-center text-sm md:text-xl text-[#4A5568]'>Login to view showroom</h1>
            <div className='mt-4 md:mt-10 flex justify-center'>
            <form class="space-y-5 md:space-y-10 w-full px-8">
            <div class="relative bg-[#EDF2F7] border-b-2 border-[#667EEA80]">
              <input type="text" name="username" placeholder=" " class="block md:p-2 w-full focus:outline-none text-sm md:text-lg appearance-none bg-transparent" />
              <label for="username" className="absolute top-0 md:p-2 text-sm md:text-lg duration-300  origin-0 flex flex-row items-center gap-2 ">
                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_28_21)">
                  <path opacity="0.4" d="M10.2143 4C10.2143 4.79113 9.99645 5.56448 9.58832 6.22228C9.18019 6.88008 8.6001 7.39277 7.9214 7.69552C7.24271 7.99827 6.49589 8.07748 5.77539 7.92314C5.05489 7.7688 4.39306 7.38784 3.87361 6.82843C3.35416 6.26902 3.00041 5.55629 2.85709 4.78036C2.71377 4.00444 2.78733 3.20017 3.06846 2.46927C3.34958 1.73836 3.82565 1.11365 4.43646 0.674122C5.04727 0.234596 5.76539 0 6.50001 0C7.4851 0 8.42984 0.421427 9.1264 1.17157C9.82297 1.92172 10.2143 2.93913 10.2143 4Z" fill="black" fill-opacity="0.5"/>
                  <path d="M9.1 9H8.6154C7.95212 9.32936 7.2304 9.49992 6.5 9.49992C5.7696 9.49992 5.04788 9.32936 4.3846 9H3.9C2.86573 9.00025 1.87388 9.44283 1.14254 10.2304C0.411197 11.018 0.000230787 12.0862 0 13.2L0 14.5C0 14.8978 0.146747 15.2794 0.407958 15.5607C0.66917 15.842 1.02345 16 1.39286 16H11.6071C11.9766 16 12.3308 15.842 12.592 15.5607C12.8533 15.2794 13 14.8978 13 14.5V13.2C12.9998 12.0862 12.5888 11.018 11.8575 10.2304C11.1261 9.44283 10.1343 9.00025 9.1 9Z" fill="black" fill-opacity="0.5"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_28_21">
                  <rect width="13" height="16" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                <p className='text-[#00000080] font-medium'>Username</p>
                </label>
            </div>
            <div class="relative bg-[#EDF2F7] border-b-2 border-[#667EEA80] ">
              <input type="password" name="password" placeholder=" " class="block md:p-2 w-full text-sm md:text-lg appearance-none focus:outline-none bg-transparent" />
              <label for="password" className="absolute top-0 text-sm md:text-lg md:p-2 duration-300 origin-0 flex flex-row items-center  gap-2 ">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M10.3787 13.222L10.3817 13.2246L9.67853 14.0156C9.61241 14.0896 9.53139 14.1487 9.44081 14.1891C9.35023 14.2295 9.25212 14.2502 9.15294 14.25H8.06251V15.4219C8.06251 15.6084 7.98843 15.7872 7.85657 15.9191C7.72471 16.0509 7.54586 16.125 7.35938 16.125H6.18751V17.2969C6.18751 17.4834 6.11343 17.6622 5.98157 17.7941C5.84971 17.9259 5.67086 18 5.48438 18H2.20313C2.01665 18 1.8378 17.9259 1.70594 17.7941C1.57408 17.6622 1.5 17.4834 1.5 17.2969V15.0117C1.49978 14.9193 1.51777 14.8278 1.55296 14.7423C1.58815 14.6568 1.63984 14.5792 1.70508 14.5137L6.4462 9.77258L6.44298 9.76233C6.73061 10.6377 7.24727 11.4202 7.93934 12.0286C8.63141 12.6369 9.47367 13.049 10.3787 13.222Z" fill="black" fill-opacity="0.5"/>
                <path d="M11.3438 3C10.3239 3 9.32704 3.30241 8.4791 3.86898C7.63115 4.43556 6.97026 5.24086 6.58 6.18304C6.18973 7.12522 6.08762 8.16197 6.28658 9.16218C6.48553 10.1624 6.97662 11.0812 7.69773 11.8023C8.41885 12.5234 9.33761 13.0145 10.3378 13.2134C11.338 13.4124 12.3748 13.3103 13.317 12.92C14.2592 12.5297 15.0645 11.8688 15.631 11.0209C16.1976 10.173 16.5 9.17606 16.5 8.15625C16.5 6.78873 15.9568 5.47722 14.9898 4.51023C14.0228 3.54325 12.7113 3 11.3438 3V3ZM12.75 8.15625C12.4719 8.15625 12.2 8.07377 11.9687 7.91925C11.7375 7.76473 11.5572 7.54511 11.4508 7.28815C11.3444 7.03119 11.3165 6.74844 11.3708 6.47565C11.425 6.20287 11.559 5.9523 11.7556 5.75563C11.9523 5.55896 12.2029 5.42503 12.4757 5.37077C12.7484 5.31651 13.0312 5.34436 13.2882 5.45079C13.5451 5.55723 13.7647 5.73747 13.9193 5.96873C14.0738 6.19999 14.1563 6.47187 14.1563 6.75C14.1563 7.12296 14.0081 7.48065 13.7444 7.74437C13.4807 8.00809 13.123 8.15625 12.75 8.15625Z" fill="black" fill-opacity="0.5"/>
              </svg>
                <p className='text-[#00000080] font-medium'>Password</p>
                </label>
            </div>
              <div>
                <button className='w-full bg-[#667EEA] text-white font-medium text-[12px] md:text-lg p-1 md:p-3 px-8 flex justify-center'>
                Login
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showroom