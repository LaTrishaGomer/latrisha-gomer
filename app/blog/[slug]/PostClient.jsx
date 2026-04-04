"use client"
import Navbar from '../../components/Navbar'
import { useState, useEffect } from 'react'

export default function PostClient({ slug }) {
  const [Post, setPost] = useState(null)

  useEffect(() => {
    import(`../posts/${slug}.mdx`).then(mod => setPost(() => mod.default))
  }, [slug])

  if (!Post) return null

  return (
    <main>
      <Navbar />
      <div className='max-w-2xl mx-auto px-6 py-20 font-ovo'>
        <a href='/blog' className='text-sm mb-8 block'>← Back to Notes</a>
        <Post />
      </div>
    </main>
  )
}