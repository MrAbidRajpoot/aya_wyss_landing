import React from 'react'
import sunstainabilityImage from '../images/sustainabilityImage.png'
import dots from '../images/dots.png'

function Sustainability() {
  return (
    <section id='sustainability' className='md:mx-24 mx-4'>
       <h1 className='text-2xl md:text-3xl lg:5xl font-bold mt-20 text-center lg:text-start'>Sustainability</h1>
      <img src={dots} className='absolute mt-16 -ml-8 z-0 hidden lg:block'></img>
        <div className='lg:flex lg:flex-row justify-between gap-16 mt-10'>
          <div className='lg:w-1/2 pt-16 z-10 flex lg:block justify-center'>
              <a href="/" className="">
                <img className="w-auto" src={sunstainabilityImage} alt="Hero Image" />
              </a>
          </div>
          <div className='lg:w-1/2'>
            <h1 className='text-base md:text-lg lg:text-xl font-bold text-center lg:text-start mt-10 lg:mt-0'>Commitment to Environmental Sustainability</h1>
              <p className='mt-10 text-[12px] md:text-sm'>
              Demonstrating our dedication to environmental sustainability, we prioritize the reduction of our carbon footprint. Upholding our commitment to environmental awareness extends beyond our internal operations to encompass our staff, suppliers, and the wider public. We diligently fulfill our responsibilities and adhere to all relevant instructions and obligations. Rigorous audits and certifications from international organizations validate the environmental integrity of our production facilities.
<br></br>
<br></br>
Embedding a sustainable mindset into every facet of our business, we conscientiously opt for organic and recycled materials. Embracing innovations like better cotton, Lenzing fibers, and hemp sustainable fabrics, we ensure our sourcing aligns with eco-conscious principles. Adhering to stringent chemical regulations further underscores our commitment to sustainability.
<br></br>
<br></br>
Our proactive approach includes implementing robust waste management systems within our production processes. Looking ahead, our forthcoming initiative involves transitioning towards solar energy to power our facilities, thereby further mitigating our environmental impact.
<br></br>
<br></br>
Central to our ethos is our steadfast pursuit of minimizing our carbon footprint and cultivating a sustainable supply chain. Recognizing that true sustainability entails meeting present needs without compromising the ability of future generations to meet their own, we steadfastly champion sustainable development.
<br></br>
<br></br>
Our overarching goal is to propel sustainable textiles forward, fostering circularity in both design and production processes. Through continuous innovation and unwavering dedication, we aim to lead the way towards a more environmentally conscious future.
              </p>
          </div>
        </div>
    </section>
  )
}

export default Sustainability