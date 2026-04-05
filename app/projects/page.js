import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Blog from '../components/Blog'
import { getAllPosts } from '../lib/posts'

export default function ProjectsPage() {
  const posts = getAllPosts().filter(post => post.category === 'Projects')
  
  return (
    <main>
      <Navbar />
      <div className='pt-44'>
        <Blog posts={posts} title="Projects" />
      </div>
      <Footer />
    </main>
  )
}