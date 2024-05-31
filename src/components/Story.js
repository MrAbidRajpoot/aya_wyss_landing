import React from 'react'
import storyImage from '../images/storyImage.png'
import ourTeamImage from '../images/ourTeamImage.png'
import dots from '../images/dots.png'
import './components.css'

function Story() {
  return (
    <section id="story" className='pb-20 story_section'>
      <div className='md:mx-24 mx-4'>
        <h1 className='text-2xl md:text-5xl font-bold m-20 text-center md:text-start'>Story</h1>
      <img src={dots} className='absolute -mt-10 -ml-8 z-0 hidden md:block'></img>
        <div className='md:flex md:flex-row justify-between gap-16'>
          <div className='md:w-1/3 z-10 flex md:block justify-center'>
              <a href="/" className="">
                <img className="w-auto" src={storyImage} alt="Hero Image" />
              </a>
          </div>
          <div className='md:w-2/3'>
              <p className='mt-5 text-[10px] lg:text-[12px] xl:text-base'>
                  At AYA WYSS, we're more than just a clothing and accessories design company – we're your trusted partner in fashion sourcing, production, and merchandising. With a rich history rooted in textile engineering, our company founder embarked on a journey in 1997, driven by passion and ambition. Today, with over two decades of experience in the industry, we continue to excel, serving as a premier sourcing provider for fashion brands across the globe.              
              </p>
              <h1 className='text-xl md:text-2xl font-medium my-8 text-center md:text-start'>Our Expertise</h1>
              <p className='text-center md:text-start text-[10px] lg:text-[12px] xl:text-base'>
                Specializing in jersey and womenswear, we possess the capacity to produce over 500 thousand units annually. Our meticulous attention to detail and commitment to quality ensure that every piece bearing the AYA WYSS label is crafted with precision and care. Whether you're a burgeoning startup or an established brand, we tailor our services to meet your unique needs, helping you bring your creative vision to life.
              </p>
          </div>
        </div>
        <div className='md:flex md:flex-row justify-between gap-16 my-10 mt-40'>
          <div className='md:w-2/3'>
             <h1 className='text-xl font-medium text-center md:text-start'>Our Team</h1>
              <p className='mt-10 text-center md:text-start text-[10px] lg:text-[12px] xl:text-base'>
                  At AYA WYSS, we believe in the power of collaboration. That's why we're assembling a team of talented designers dedicated to pushing the boundaries of fashion innovation. From conceptualization to execution, our team works tirelessly to curate collections that resonate with today's dynamic market trends.              
              </p>
          </div>
          <div className='md:w-1/3 relative mt-20 md:mt-0'>
              <img src={dots} className='absolute -mt-10 -ml-7 z-0 hidden md:block' alt="" />
              <a href="/" className="z-10 relative flex justify-center md:block">
                  <img className="w-auto" src={ourTeamImage} alt="Hero Image" />
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story