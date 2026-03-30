import Blog from '../components/Blog'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BlogPage() {
  return (
    <main>
     <Navbar />
     <div className="pt-54"> 
      <Blog />
      </div>
      <Footer />
    </main>
  )
}