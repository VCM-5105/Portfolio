import React, { useEffect, useState } from "react";
import resume from "../assests/Resume_SDE.pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];

  return (
   <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled ? "bg-linear-to-r from-[#0f172a]/90 via-[#1e293b]/90 to-[#0f172a]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
  }`}
>
      <div className="max-w-7xl mx-auto px-8 py-4 grid grid-cols-3 items-center">

       
        <div></div>

       
        <ul className="hidden md:flex justify-center gap-8 text-gray-200">
          {links.map((link) => (
            <li key={link} className="relative group">
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-400 transition"
              >
                {link}
              </a>

             
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        
        <div className="flex justify-end">
          <a
            href={resume}
            download
            className="bg-linear-to-r from-cyan-400 to-blue-500  text-black px-6 py-2 rounded-lg hover:opacity-90 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
