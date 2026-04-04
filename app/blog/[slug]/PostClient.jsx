"use client"
import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export default function PostClient({ slug }) {
  const [mdxSource, setMdxSource] = useState(null)
  const [frontmatter, setFrontmatter] = useState({})

  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then(res => res.json())
      .then(data => {
        setFrontmatter(data.frontmatter)
        setMdxSource(data.mdxSource)
      })
  }, [slug])

  if (!mdxSource) return null

  return (
    <main>
      <Navbar />
      <div className='max-w-2xl mx-auto px-6 pt-32 pb-20'>
        
        {/* Back Link */}
        <a href='/blog' className='text-sm mb-8 block'>← Back to Notes</a>

        {/* Title */}
        <h1 className='text-2xl sm:text-4xl font-bold font-ovo mb-6'>{frontmatter.title}</h1>

        {/* Author + Date on same line */}
        <div className='flex items-center justify-between mb-8'>
          <div className='flex items-center gap-3'>
            <Image src={assets.profile_img} alt='author' width={40} height={40} className='rounded-full' />
            <span className='font-ovo text-sm'>La'Trisha Gomer</span>
          </div>
          <span className='font-ovo text-sm text-gray-500'>{frontmatter.date}</span>
        </div>

        {/* Cover Image */}
        {frontmatter.coverImage && (
          <div className='mb-10'>
            <Image src={frontmatter.coverImage} alt={frontmatter.title} width={800} height={450} className='w-full rounded-lg object-cover' />
          </div>
        )}

        {/* Article Content */}
        <div className='prose font-ovo'>
          <MDXRemote {...mdxSource} />
        </div>

      </div>
    </main>
  )
}