import React, { useEffect, useState } from "react";
import profile from "../assests/picture.png";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  
  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 px-8 bg-gray-900 text-center flex flex-col items-center overflow-hidden"
    >
      
      <div
        className="pointer-events-none absolute inset-0 transition duration-75"
        style={{
          background: `radial-gradient(
            300px circle at ${pos.x}px ${pos.y}px,
            rgba(34,211,238,0.08),
            transparent 70%
          )`,
        }}
      />

     
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center"
      >
        
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          About Me
        </h2>

        
        <motion.img
          src={profile}
          alt="Vipul"
          whileHover={{ scale: 1.05 }}
          className="rounded-full w-40 h-40 mb-6 border-4 border-cyan-400 
                     shadow-lg shadow-cyan-500/30"
        />

        
        <p className="max-w-2xl text-gray-300 leading-relaxed">
          Computer Science student focused on building modern web applications with JavaScript and React. 
          I enjoy turning ideas into clean, responsive interfaces and continuously improving through hands-on development and real-world projects.
        </p>

        <p className="mt-4 text-gray-300 max-w-2xl">
         My journey began at Sainik School, where discipline, consistency, and resilience became a way of life.
         That foundation now shapes how I approach software development — with a problem-solving mindset, attention to detail,
         and a strong sense of responsibility.I aim to build solutions that are not only functional, but reliable and thoughtfully crafted.
        </p>

        
        <div className="mt-14 w-full max-w-3xl">
          <h3 className="text-xl text-cyan-300 mb-8 font-semibold">
            Education
          </h3>

          <div className="relative border-l border-gray-700 pl-6 space-y-8 text-left">

            
            <motion.div
              whileHover={{ x: 5 }}
              className="relative group"
            >
              

              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-cyan-400" />
                <h4 className="text-gray-200 font-medium">
                  B.E. CSE — Chandigarh University
                </h4>
              </div>

              <p className="text-sm text-gray-400 ml-7">
                2022 – 2026 • CGPA: 7.69
              </p>
            </motion.div>

            
            <motion.div
              whileHover={{ x: 5 }}
              className="relative group"
            >
              

              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-gray-400 group-hover:text-cyan-400 transition" />
                <h4 className="text-gray-200 font-medium">
                  Sainik School Purulia — Class XII
                </h4>
              </div>

              <p className="text-sm text-gray-400 ml-7">
                2020 – 2021 • 91%
              </p>
            </motion.div>

          
            <motion.div
              whileHover={{ x: 5 }}
              className="relative group"
            >
              

              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-gray-400 group-hover:text-cyan-400 transition" />
                <h4 className="text-gray-200 font-medium">
                  Sainik School Purulia — Class X
                </h4>
              </div>

              <p className="text-sm text-gray-400 ml-7">
                2018 – 2019 • 91.6%
              </p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;