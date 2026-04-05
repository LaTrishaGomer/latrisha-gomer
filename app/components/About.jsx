import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

 const About = () => {
  return (
    <div id='about' className='pt-44 w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Welcome! I'm La'Trisha</h4>
      <h2 className='text-center text-4xl font-ovo'>Here's How I Got Here...</h2>

      {/* Center content wrapper */}
      <div className='flex w-full max-w-3xl mx-auto flex-col items-center gap-10 my-20'>

        {/* Image section */}
        <div className='w-64 sm:w-80 rounded-3xl'>
        <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>

        {/* Text & Skills section */}
        <div className='flex-1 text-center max-w-2xl'>

          {/* About Paragraph */}
        
        <h3 className='text-2xl font-semibold mb-1 text-left'>I used to write the news. Now I write code.</h3>
        
        <br />
        <p className='mb-10 font-ovo text-left'> 
        As a TV news writer and producer, I had a front row seat to some of the biggest technology stories of the last decade, and I never got tired of covering them.
        </p>
        <p className='mb-10 font-ovo text-left'> 
        My curiosity about technology didn't end when I went home after work. I started watching YouTube videos about building websites and taught myself WordPress, HTML, and CSS. Friends and family started asking me to build their websites, which led to a few freelancing opportunities. Eventually, I made the decision I had been thinking about for a while. I left my 13 year career in TV news.
        </p>
        <p className='mb-10 font-ovo text-left'>
        At the end of 2024, I was selected for the <a href="https://www.adobe.com/corporate-responsibility/creativity/digital-academy.html" target="_blank"><strong>Adobe Digital Academy</strong></a>, a program to help people upskill and launch a career in tech. They covered my bootcamp tuition for General Assembly's software engineering program. After graduating, I kept building, kept learning, and landed a role as a software engineer working with C#, .NET, Azure, JavaScript, and Angular across both the frontend and the backend.
        </p>
        <p className='mb-10 font-ovo text-left'>
        This blog is a place for me to share my experience as a career changer. I write about what I'm learning, what I'm building, and the things I wish I knew before I became a software engineer. Not because I have it all figured out, but because the best engineers I know never stop being curious and are always willing to share their experiences.
        </p>
        
        <h3 className='text-2xl font-semibold mb-1 text-left'>When I'm not coding...</h3>
        
        <br />
        <p className='mb-10 font-ovo text-left'>
        I'm probably planning my next adventure to somewhere I've never been. I love exploring new places, learning about different cultures, and finding the best local restaurants wherever I land. When I'm home, my Chihuahua Diva keeps me busy. She's tiny, but she definitly lives up to her name!
        </p>
          <div className='w-64 sm:w-80 rounded-3xl mx-auto'>
        <Image src={assets.diva_image} alt='diva' className='w-full rounded-3xl' />
        </div>
        <br />

        
        <h3 className='text-2xl font-semibold mb-1 text-left'>Get in touch</h3>
        
        <br />
        <p className='mb-10 font-ovo text-left'>
        If you want to work together, talk code, or just say hi, I'd love to hear from you! <a href="https://www.latrishagomer.com/contact" target="_blank"><strong>Let's talk.</strong></a>
       </p>

        </div>
      </div>
    </div>
  )
}

export default About
