import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ title, stack, description, link, github, image }) => {
  const techArray = stack.split(", ");
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className="group relative rounded-xl overflow-hidden border border-gray-800 
                 hover:border-cyan-400/40 transition-all duration-300"
    >
      
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{
          background: `radial-gradient(
            250px circle at ${pos.x}px ${pos.y}px,
            rgba(34,211,238,0.15),
            transparent 70%
          )`,
        }}
      />

      
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover grayscale group-hover:grayscale-0 transition duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#020617]/95 opacity-0 group-hover:opacity-100 
                      transition duration-300 flex flex-col justify-center items-center text-center px-6">

        <h3 className="text-xl font-semibold text-cyan-300 mb-2">
          {title}
        </h3>

        <p className="text-gray-300 text-sm mb-4">
          {description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {techArray.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={link} target="_blank" className="text-cyan-400 flex items-center gap-2">
            <FaExternalLinkAlt size={14} /> Live
          </a>

          <a href={github} target="_blank" className="text-gray-300 hover:text-cyan-400 flex items-center gap-2">
            <FaGithub size={16} /> Code
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="p-5 bg-[#020617]">
        <h3 className="text-lg font-semibold text-cyan-400">{title}</h3>
        <p className="text-gray-400 text-sm mt-2 line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
