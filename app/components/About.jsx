import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About me</h2>

      {/* Center content wrapper */}
      <div className='flex w-full max-w-5xl mx-auto flex-col lg:flex-row items-center gap-20 my-20 justify-center'>

        {/* Image section */}
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>

        {/* Text & Skills section */}
        <div className='flex-1 text-center lg:text-left'>

          {/* About Paragraph */}
          <p className='mb-10 max-w-2xl font-ovo mx-auto lg:mx-0'>
          I'm a developer with a sharp eye for design and a knack for storytelling. My background in journalism taught me how to organize information so it's easy to understand and navigate.
        <br/> <br/>

          I specialize in building beautiful, user-friendly websites that help small businesses and entrepreneurs stand out online. Whether it’s designing a seamless user experience, developing custom features, or fine-tuning the details that make a website shine, I’m here to build something that’s both stunning and strategic.
          </p>

          {/* Skills Section */}
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0'>
            {infoList.map(({icon, title, description}, index) => (
              <li 
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' 
                key={index}
              >
                <Image src={icon} alt={title} className='w-7 mt-3'/>
                <h3 className='my-4 font-outfit font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </li>
            ))}
          </ul>

{/*     
          <h4 className='my-6 text-gray-700 font-ovo'>Tools I use</h4>
          <ul className='flex items-center justify-center lg:justify-start gap-3 sm:gap-5 mx-auto lg:mx-0'>
            {toolsData.map((tool, index) => (
              <li 
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
                key={index}
              >
                <Image src={tool} alt='tool' className='w-5 sm:w-7' />
              </li>
            ))}
          </ul> */}

        </div>
      </div>
    </div>
  )
}

export default About
