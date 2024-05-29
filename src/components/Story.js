import React from 'react'
import storyImage from '../images/storyImage.png'
import ourTeamImage from '../images/ourTeamImage.png'
import dots from '../images/dots.png'
import './components.css'

function Story() {
  return (
    <section id="story" className='pb-20 story_section'>
      <div className='mx-24'>
        <h1 className='text-5xl font-bold m-20 '>Story</h1>
      <img src={dots} className='absolute -mt-10 -ml-8 z-0'></img>
        <div className='flex flex-row justify-between gap-16'>
          <div className='w-1/3 z-10'>
              <a href="/" className="">
                <img className="w-auto" src={storyImage} alt="Hero Image" />
              </a>
          </div>
          <div className='w-2/3'>
              <p className='mt-5'>
                  At AYA WYSS, we're more than just a clothing and accessories design company – we're your trusted partner in fashion sourcing, production, and merchandising. With a rich history rooted in textile engineering, our company founder embarked on a journey in 1997, driven by passion and ambition. Today, with over two decades of experience in the industry, we continue to excel, serving as a premier sourcing provider for fashion brands across the globe.              
              </p>
              <h1 className='text-2xl font-medium my-8'>Our Expertise</h1>
              <p className=''>
                Specializing in jersey and womenswear, we possess the capacity to produce over 500 thousand units annually. Our meticulous attention to detail and commitment to quality ensure that every piece bearing the AYA WYSS label is crafted with precision and care. Whether you're a burgeoning startup or an established brand, we tailor our services to meet your unique needs, helping you bring your creative vision to life.
              </p>
          </div>
        </div>
        <div className='flex flex-row justify-between gap-16 my-10'>
          <div className='w-2/3'>
             <h1 className='text-3xl font-medium '>Our Team</h1>
              <p className='mt-10'>
                  At AYA WYSS, we believe in the power of collaboration. That's why we're assembling a team of talented designers dedicated to pushing the boundaries of fashion innovation. From conceptualization to execution, our team works tirelessly to curate collections that resonate with today's dynamic market trends.              
              </p>
          </div>
          <div className='w-1/3 relative'>
              <img src={dots} className='absolute -mt-10 -ml-7 z-0' alt="Background Image" />
              <a href="/" className="z-10 relative block">
                  <img className="w-full" src={ourTeamImage} alt="Hero Image" />
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story