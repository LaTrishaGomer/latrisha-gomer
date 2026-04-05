import Image from 'next/image'
import Link from 'next/link'
import { assets } from '@/assets/assets'

const projectsData = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and what you built it with.',
    image: '/images/blog-post-image.png',
    slug: '#'
  },
  {
    title: 'Project Two',
    description: 'A short description of what this project does and what you built it with.',
    image: '/images/blog-post-image.png',
    slug: '#'
  },
  {
    title: 'Project Three',
    description: 'A short description of what this project does and what you built it with.',
    image: '/images/blog-post-image.png',
    slug: '#'
  },
    {
    title: 'Project Four',
    description: 'A short description of what this project does and what you built it with.',
    image: '/images/blog-post-image.png',
    slug: '#'
  }
]

const Projects = () => {
  return (
    <div className='w-full px-[12%] py-10'>
      <div className='max-w-2xl mx-auto'>
        
        <h3 className='mb-2 text-2xl font-ovo'>Things I've Built</h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6'>
          {projectsData.map((project, index) => (
            <div key={index} className='flex flex-col gap-3'>
              <div className='w-full aspect-video bg-gray-100 rounded-xl overflow-hidden'>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600} 
                  height={340} 
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='font-ovo font-semibold text-lg'>{project.title}</h3>
              <p className='font-ovo text-gray-600 text-sm'>{project.description}</p>
            </div>
          ))}
        </div>
        
        <div className='mt-20'>
  <a href="/" 
  className='px-10 py-3 border border-white rounded-full bg-black text-white inline-flex items-center gap-2'>
    All Projects <Image src={assets.right_arrow_bold_dark} alt="" className='w-4' />
  </a>
</div>

      </div>
    </div>
  )
}

export default Projects