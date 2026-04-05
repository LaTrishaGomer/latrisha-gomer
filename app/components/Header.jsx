import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full px-[12%] py-20'>
      <div className='max-w-2xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10'>
        
        {/* Image - on top for mobile, right for desktop */}
        <div className='w-48 flex-shrink-0'>
          <Image 
            src={assets.profile_img_pink} 
            alt='Diva' 
            className='w-full rounded-2xl object-cover' 
            width={200} 
            height={250}
          />
        </div>

        {/* Text */}
        <div className='flex-1 text-left'>
          <h1 className='flex items-center gap-2 text-3xl lg:text-4xl mb-3 font-ovo'>
            Hi, I'm La'Trisha! <Image src={assets.hand_icon} alt='' className='w-6'/>
          </h1>
          <p className='font-ovo text-gray-600'>
            A software engineer based in Kansas City. Writing code, exploring new ideas, and building projects. Sharing what I learn as I go.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Header
