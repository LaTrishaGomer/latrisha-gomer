import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

 const About = () => {
  return (
    <div id='about' className='pt-54 w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Welcome! I'm La'Trisha</h4>
      <h2 className='text-center text-5xl font-ovo'>Here's how I got here...</h2>

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
        I used to write the news. Now I write code.
        <br/> 
        As a TV news writer and producer, I covered Presidential elections, major news stories, and the rise of the tech industry as it was happening. Some of my favorite stories to write were about technology.
        <br/>
        My curiosity about tech turned into a hobby after work. I taught myself WordPress, HTML, CSS and started building websites for fun. Friends and family started to ask me to build their websites, which led to a few freelancing opportunities, and eventually to my decision to leave my 13 year career in TV news.
        <br/>
        At the end of 2024, I was selected for the Adobe Digital Academy, a program to help people upskill and launch a career in tech. They covered my bootcamp tuition for General Assembly's Software Engineering program. After graduating, I kept building, kept learning, and landed a role as a software engineer working with C#, .NET, JavaScript, and Angular across both the frontend and the backend.
        <br/>
        This blog is a place for me to share my experience as a career changer. I write about what I'm learning, what I'm building, and the things I wish I knew before I became a software engineer. Not because I have it all figured out, but because the best engineers I know never stop being curious and are always willing to share their experiences.
        <br/>
        If you want to work together, talk code, or just say hi, I'd love to hear from you. <a href="https://www.latrishagomer.com/contact" target="_blank">Let's talk.</a>
          </p>

          {/* Skills Section */}
          {/*<ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0'>
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
