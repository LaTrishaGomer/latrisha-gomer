'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion } from "motion/react"

const Blog = ({ limit, showButton, posts = [], title = "The Blog" }) => {
  const displayedPosts = limit ? posts.slice(0, limit) : posts

  return (
    <motion.div 
      id='blog' 
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className='mb-2 text-2xl font-ovo max-w-2xl mx-auto'>{title}</h3>
        <div className='flex flex-col gap-12 my-10 max-w-2xl mx-auto'>
        {displayedPosts.map((project, index) => (
          <motion.div 
            key={index} 
            className='flex flex-col gap-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            viewport={{ once: true }}
          >
            <div className='px-2'>
              {project.slug ? (
                <Link href={`/blog/${project.slug}`}>
                  <h2 className='text-2xl font-semibold mb-1 hover:bg-lightHover transition'>{project.title}</h2>
                </Link>
              ) : (
                <h2 className='text-2xl font-semibold mb-1'>{project.title}</h2>
              )}
              <p className='text-gray-700 text-base mb-4'>{project.description}</p>
            </div>
          </motion.div>
        ))}
          {showButton && (
            <motion.div 
              className='flex flex-col sm:flex-row items-start gap-4 mt-4'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <a href="/blog" 
              className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
                All Posts <Image src={assets.right_arrow_bold_dark} alt="" className='w-4' />
              </a>
            </motion.div>
          )}
      </div>
    </motion.div>
  )
}

export default Blog
