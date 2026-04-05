import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <motion.div 
      className='w-full px-[12%] py-20'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className='max-w-2xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10'>
        
        {/* Image */}
        <div className='w-48 flex-shrink-0'>
          <Image 
            src={assets.profile_img} 
            alt='Diva' 
            className='w-full rounded-2xl object-cover' 
            width={200} 
            height={250}
          />
        </div>

        {/* Text */}
        <div className='flex-1 text-left'>
          <h3 className='flex items-center gap-2 text-3xl lg:text-4xl mb-3 font-ovo'>
            Hi, I'm La'Trisha! <Image src={assets.hand_icon} alt='' className='w-6'/>
          </h3>
          <p className='font-ovo text-gray-600'>
            A software engineer based in Kansas City. I enjoy writing code, exploring new ideas, building projects, and sharing what I learn as I go.
          </p>
        </div>

      </div>
    </motion.div>
  )
}

export default Header
