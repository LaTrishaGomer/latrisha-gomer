'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-full px-[12%] py-20 pt-44'>
      <div className='max-w-2xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10'>
        
        {/* Image */}
        <motion.div 
          className='w-48 flex-shrink-0'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image 
            src={assets.profile_img_pink} 
            alt='LaTrisha' 
            className='w-full rounded-2xl object-cover' 
            width={200} 
            height={250}
          />
        </motion.div>

        {/* Text */}
        <div className='flex-1 text-left'>
          <motion.h3 
            className='flex items-center gap-2 text-3xl lg:text-4xl mb-3 font-ovo'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Hi, I'm La'Trisha! <Image src={assets.hand_icon} alt='' className='w-6'/>
          </motion.h3>

          <motion.p 
            className='font-ovo text-gray-700'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A software engineer based in Kansas City. I enjoy writing code, exploring new ideas, building projects, and sharing what I learn as I go.
          </motion.p>
        </div>

      </div>
    </div>
  )
}

export default Header
