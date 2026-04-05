import Blog from '../components/Blog'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getAllPosts } from '../lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <main>
     <Navbar />
     <div className="pt-44"> 
      <Blog posts={posts} />
      </div>
      <Footer />
    </main>
  )
}