'use client'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Projects from "./components/Projects";

export default function Home() {
  return (
    < >
    <Navbar />
    <div className="pt-24"> 
    <Header />
    </div>
    <Blog limit={3} showButton={true} />
    <Projects />
    <Footer />
    </>
  );
}
