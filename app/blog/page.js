import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogFilter from '../components/BlogFilter'
import { getAllPosts } from '../lib/posts'

export default function BlogPage() {
  const posts = getAllPosts().filter(post => post.published !== false)
  
  return (
    <main>
      <Navbar />
      <div className='pt-44'>
        <BlogFilter posts={posts} />
      </div>
      <Footer />
    </main>
  )
}