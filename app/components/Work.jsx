import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>My portfolio</h4>
      <h2 className='text-center text-5xl font-ovo'>My latest work</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Here are some of my latest projects. I designed and developed these apps and websites using tools like Figma, Node.js, Express, MongoDB, EJS, HTML, CSS, and JavaScript.
      </p>

      <div className='flex flex-col gap-16 my-10 max-w-6xl mx-auto'>
        {workData.map((project, index) => (
          <div key={index} className='flex flex-col gap-4'>
            {/* Project Image */}
            <div
              className='w-full aspect-[1278/717] bg-no-repeat bg-cover bg-center rounded-lg'
              style={{ backgroundImage: `url(${project.bgImage})` }}
            ></div>

            {/* Project Info */}
            <div className='px-2'>
              <h2 className='text-2xl font-semibold mb-1'>{project.title}</h2>
              <p className='text-gray-700 text-base mb-4'>{project.description}</p>

              {/* Styled Buttons with Icons */}
              <div className='flex flex-wrap gap-4'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-sm font-ovo text-gray-800 border border-gray-300 rounded-full px-4 py-2 hover:bg-lightHover transition'
                >
                  <Github size={16} />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-sm font-ovo text-gray-800 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition'
                >
                  <ExternalLink size={16} />
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
