import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import { getAllPosts } from "./lib/posts";

export default function Home() {
  const posts = getAllPosts().filter(post => post.published !== false)
  const projects = getAllPosts().filter(post => post.category === 'Projects')
  
  return (
    <>
      <Navbar />
      <Header />
      <Blog limit={3} showButton={true} posts={posts} />
      <Projects projects={projects} />
      <Footer />
    </>
  )
}
