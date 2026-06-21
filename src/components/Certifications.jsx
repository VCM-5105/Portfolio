 import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  const data = [
    {
      year: "2025",
      title: "Foundation of Cloud IoT Edge ML",
      issuer: "NPTEL",
      desc: "Focused on IoT systems and edge-based ML applications.",
      link: "https://drive.google.com/file/d/1Wj3jzFBkupXQavxc7E_HYO3q1zY-S1PQ/view?usp=sharing",
    },
    {
      year: "2023",
      title: "Multi-Core Computer Architecture",
      issuer: "NPTEL",
      desc: "Understanding parallel processing, CPU design, and performance optimization in multi-core systems.",
      link: "https://drive.google.com/file/d/10mRMY6gOMhJ3IJDrigYBoskfqzuLq0rt/view?usp=sharing",
    },
    {
      year: "2025",
      title: "React Native",
      issuer: "Meta",
      desc: "Built cross-platform mobile apps using React Native.",
      link: "https://www.coursera.org/account/accomplishments/certificate/8DK7AM22YC18",
    },
    
    {
      year: "2024",
      title: "SQL Advanced",
      issuer: "HackerRank",
      desc: "Advanced querying, joins, and database optimization.",
      link: "#",
    },
    {
      year: "2025",
      title: "System Design",
      issuer: "Udemy",
      desc: "Scalable system architecture and design fundamentals.",
      link: "#",
    },
  ];

  const ITEMS_PER_VIEW = 4;
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index + ITEMS_PER_VIEW < data.length) {
      setIndex(index + ITEMS_PER_VIEW);
    }
  };

  const prev = () => {
    if (index - ITEMS_PER_VIEW >= 0) {
      setIndex(index - ITEMS_PER_VIEW);
    }
  };

  const visible = data.slice(index, index + ITEMS_PER_VIEW);

  return (
    <section id="certifications" className="py-24 bg-[#020617] text-center">
      
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-16">
        Certifications
      </h2>

      <div className="relative max-w-6xl mx-auto px-6">

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {visible.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center group"
            >

              
              <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-cyan-400 
                              flex items-center justify-center text-sm text-cyan-300 font-semibold 
                              group-hover:scale-110 transition">
                {item.year}
              </div>

              
              <div className="mt-4 text-center max-w-50">
                
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 font-medium hover:text-cyan-400 transition flex items-center justify-center gap-2"
                >
                  {item.title}
                  <FaExternalLinkAlt size={12} />
                </a>

                <p className="text-xs text-gray-500 mt-1">
                  {item.issuer}
                </p>

                
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full 
                     border border-gray-700 hover:border-cyan-400 
                     text-gray-300 hover:text-cyan-400 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full 
                     border border-gray-700 hover:border-cyan-400 
                     text-gray-300 hover:text-cyan-400 transition"
        >
          <FaChevronRight />
        </button>

      </div>
    </section>
  );
};

export default Certifications;