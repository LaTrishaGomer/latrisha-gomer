'use client'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Blog from "./components/Blog";

export default function Home() {
  return (
    < >
    <Navbar />
    <Header />
    {/*<About />*/}
    {/*<Services />*/}
    <Blog limit={4} showButton={true} />
    {/*<Contact />*/}
    <Footer />
    </>
  );
}
