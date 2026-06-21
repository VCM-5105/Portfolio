import React from "react";
import { FaCode, FaTools, FaLayerGroup } from "react-icons/fa";

const Skills = () => {
  const data = [
    {
      title: "Languages",
      icon: <FaCode />,
      items: ["C/C++", "JavaScript", "SQL", "HTML/CSS", "Java", "Python"],
    },
    {
      title: "Frameworks",
      icon: <FaLayerGroup />,
      items: ["React.js", "Tailwind CSS"],
    },
    {
      title: "Tools",
      icon: <FaTools />,
      items: ["Git", "GitHub", "VS Code", "IntelliJ", "Eclipse", "npm"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0b1120] text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-16">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
        {data.map((section, index) => (
          <div
            key={index}
            className="group bg-[#020617] p-8 rounded-2xl border border-gray-800 
                       hover:border-cyan-400/40 
                       hover:-translate-y-2 
                       hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] 
                       transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-3xl text-cyan-400 mb-4 group-hover:scale-110 transition">
              {section.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-cyan-300 mb-6">
              {section.title}
            </h3>

            {/* Skill Tags */}
            <div className="flex flex-wrap justify-center gap-3">
              {section.items.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 text-sm rounded-full 
                             bg-gray-800/60 text-gray-300 
                             border border-gray-700 
                             backdrop-blur-sm
                             hover:text-cyan-400 hover:border-cyan-400/50 
                             hover:bg-cyan-400/10 
                             hover:-translate-y-0.5 
                             transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;