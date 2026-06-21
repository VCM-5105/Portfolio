import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaChevronDown } from "react-icons/fa";

const Hero = () => {
  const fullText = "Vipul Chandra Mishra.";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const startDelay = 50;

    const startTyping = setTimeout(() => {
      if (index < fullText.length) {
        const typing = setTimeout(() => {
          setText((prev) => prev + fullText[index]);
          setIndex(index + 1);
        }, 70);

        return () => clearTimeout(typing);
      }
    }, startDelay);

    return () => clearTimeout(startTyping);
  }, [index]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen px-6 text-center bg-[#020617] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 transition duration-75"
        style={{
          background: `radial-gradient(
            300px circle at ${position.x}px ${position.y}px,
            rgba(34,211,238,0.15),
            transparent 70%
          )`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-xl md:text-2xl text-gray-300 mb-3 tracking-wide font-bold">
          Hi, I’m
        </h1>

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
            {text}
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-3">
          Focused on building scalable web applications using React and modern tools.
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Driven by consistency, sharp problem-solving, and delivering real-world impact.
        </p>

        <div className="flex justify-center items-center gap-6 mt-8 text-gray-400">
          <a
            href="https://github.com/VCM-5105"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border border-gray-700 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition"
          >
            <FaGithub className="text-xl group-hover:text-cyan-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/vipul5105/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border border-gray-700 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition"
          >
            <FaLinkedinIn className="text-xl group-hover:text-cyan-400 transition" />
          </a>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 cursor-pointer 
                   animate-[bounce_2.5s_infinite] hover:text-cyan-400 
                   hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] transition"
      >
        <FaChevronDown size={33} />
      </div>

      {/* Bottom Fade */}
      {/* <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-b from-transparent to-[#020617]"></div> */}
    </section>
  );
};

export default Hero;