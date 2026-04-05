'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

const categories = ['All', 'Programming', 'Career', 'Projects', 'Cloud', 'AI', 'Reviews']

const BlogFilter = ({ posts = [] }) => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory)

  return (
    <div className='w-full px-[12%] py-10'>
      <div className='max-w-2xl mx-auto'>

        {/* Category Filter Buttons */}
        <div className='flex flex-wrap gap-3 mb-10'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-ovo border transition duration-300 ${
                activeCategory === category 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-gray-700 border-gray-300 hover:border-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Post List */}
        <div className='flex flex-col gap-12'>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={index}
                className='flex flex-col gap-2'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className='text-2xl font-semibold mb-1 hover:bg-lightHover transition'>
                    {post.title}
                  </h2>
                </Link>
                <p className='text-gray-700 text-base'>{post.description}</p>
                <span className='text-sm text-gray-400 font-ovo'>{post.date}</span>
              </motion.div>
            ))
          ) : (
            <p className='font-ovo text-gray-500'>No posts in this category yet. Check back soon!</p>
          )}
        </div>

      </div>
    </div>
  )
}

export default BlogFilter