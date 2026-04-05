'use client'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Projects = ({ projects = [] }) => {
  return (
    <div className='w-full px-[12%] py-10'>
      <div className='max-w-2xl mx-auto'>
        
        <motion.h3 
          className='mb-2 text-2xl font-ovo'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Things I've Built
        </motion.h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6'>
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className='flex flex-col gap-3'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${project.slug}`}>
                <div className='w-full aspect-video bg-gray-100 rounded-xl overflow-hidden'>
                  <Image 
                    src={project.coverImage || '/images/blog-post-image.png'} 
                    alt={project.title} 
                    width={600} 
                    height={340} 
                    className='w-full h-full object-cover hover:scale-105 transition duration-300'
                  />
                </div>
                <h3 className='font-ovo font-semibold text-lg mt-3'>{project.title}</h3>
              </Link>
              <p className='font-ovo text-gray-600 text-sm'>{project.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className='mt-20'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="/projects" 
          className='px-10 py-3 border border-white rounded-full bg-black text-white inline-flex items-center gap-2'>
            All Projects <Image src={assets.right_arrow_bold_dark} alt="" className='w-4' />
          </a>
        </motion.div>

      </div>
    </div>
  )
}

export default Projects