import Blog from '../components/Blog'
import Navbar from '../components/Navbar'

export default function BlogPage() {
  return (
    <main>
     <Navbar />
     <div className="pt-54"> 
      <Blog />
      </div>
    </main>
  )
}