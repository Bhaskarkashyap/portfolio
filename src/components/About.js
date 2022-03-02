import React from 'react'
import ContainerWidth from '../Layout/ContainerWidth';
import imageUrl from '../assets/Resume.pdf';

const About = () => {
  return (
    <ContainerWidth >
        <div className='py-16'>
            <h2 className='text-xl mb-10 leading-10'>Hello_</h2>
           <p className='text-base font-normal leading-7 mb-7'>My name is BHASKAR, I have compIeted my bachelor's in computer science from Gurukula Kangri University in india and I'm passionate Frontend | UI Developer and I have experience on and I am always eager to explore new computer science Technology, I developed web applications and UI of websites.</p>
           <a href={`${imageUrl}?dl=` }target='_blank' rel='noreferrer' download onClick ={(e) =>e.stopPropagation()}>
           <button className='text-sm font-medium text-balck border-solid border-2 border-white py-2 px-5 outline-none mr-3 rounded-full bg-purple text-white'>
        Resume
           </button>
           </a>
            </div>
        </ContainerWidth>
  )
}

export default About