import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 p-3 rounded-full 
                 bg-cyan-400 text-black 
                 shadow-lg hover:scale-110 
                 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] 
                 transition z-50"
    >
      <FaArrowUp />
    </button>
  );
};

const App = () => {
  return (
    <div className="bg-[#020617] text-gray-200 min-h-screen overflow-x-hidden scroll-smooth selection:bg-cyan-400 selection:text-black">
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />

      
      <ScrollTop />

    </div>
  );
};

export default App;

