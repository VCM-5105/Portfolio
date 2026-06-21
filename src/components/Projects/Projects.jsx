import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import project1 from "../../assests/RozerThat.png";
import project2 from "../../assests/TypingTracker.png";
import project3 from "../../assests/PathfindingVisual.png";
import project4 from "../../assests/Video_Chat.png";
import project5 from "../../assests/team_task_manger.png";
import project6 from "../../assests/Live_Code.png";
import project7 from "../../assests/Head_Streo.png";
import project8 from "../../assests/Tic_Tac_Toe.png";

const projects = [
  {
    title: "Random Video Chat",
    stack: "React, Vite, Node.js, Express.js, Socket.IO, WebRTC, JavaScript",
    description:
      "Developed a full-stack real-time video chat platform featuring random user matching, secure authentication, live messaging, and low-latency video communication using WebRTC and Socket.IO.",
    link: "https://video-chat-umber-alpha.vercel.app/",
    github: "https://github.com/VCM-5105/Video-Chat",
    image: project4,
  },
  {
    title: "Online Learning Platform",
    stack: "HTML, CSS, JS, Node.js, Express, MySQL, Tailwind",
    description:
      "Learning dashboard with authentication and tracking.",
    link: "#",
    github: "https://github.com/VCM-5105/RozerThat",
    image: project1,
  },
  {
    title: "Typing Speed Tracker",
    stack: "React, Vite, Tailwind",
    description:
      "Real-time typing performance tracker.",
    link: "#",
    github: "https://github.com/VCM-5105/Typing-Speed-Test",
    image: project2,
  },
  {
    title: "Pathfinding Visualizer",
    stack: "C++, SFML",
    description:
      "Visualizes BFS, DFS and Dijkstra algorithms.",
    link: "#",
    github: "https://github.com/VCM-5105/Pathfinding-Visuliser",
    image: project3,
  },
  {
    title: "Team Task Manager",
    stack: "React, Node.js, Express.js, MySQL, JWT, CSS",
    description:
      "Built a full-stack task management system with role-based authentication, project collaboration, task tracking, and secure REST APIs.",
    link: "https://team-task-manager-seven-blond.vercel.app/",
    github: "https://github.com/VCM-5105/team-task-manager",
    image: project5,
  },
  {
    title: "Live Code",
    stack: "HTML, CSS, JavaScript, MySQL",
    description:
      "Designed a collaborative coding platform with live chat and multi-language support.",
    link: "#",
    github: "https://github.com/VCM-5105/Live-Code",
    image: project6,
  },
  {
    title: "Music Streaming Platform",
    stack: "HTML, CSS, JavaScript",
    description:
      "Responsive music player with playlist management and playback controls.",
    link: "#",
    github: "https://github.com/VCM-5105/Music-Streaming-Platform",
    image: project7,
  },
  {
    title: "Tic-Tac-Toe",
    stack: "HTML, CSS, JavaScript",
    description:
      "Interactive Tic-Tac-Toe game with win detection and responsive gameplay.",
    link: "#",
    github: "https://github.com/VCM-5105/Tic-Tac-Toe",
    image: project8,
  },
];

const visibleProjects = 3;

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextProjects = () => {
    if (startIndex + visibleProjects < projects.length) {
      setStartIndex(startIndex + visibleProjects);
    }
  };

  const prevProjects = () => {
    if (startIndex - visibleProjects >= 0) {
      setStartIndex(startIndex - visibleProjects);
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gray-950 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
          Projects
        </h2>

        <div className="flex items-center gap-6">

          {/* LEFT */}

          <button
            onClick={prevProjects}
            disabled={startIndex === 0}
            className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all
            ${
              startIndex === 0
                ? "opacity-40 cursor-not-allowed border-gray-700"
                : "border-cyan-400 hover:bg-cyan-400 hover:text-black"
            }`}
          >
            <FaArrowLeft />
          </button>

          {/* PROJECTS */}

          <motion.div
            key={startIndex}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="grid md:grid-cols-3 gap-8 flex-1"
          >
            {projects
              .slice(startIndex, startIndex + visibleProjects)
              .map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                />
              ))}
          </motion.div>

          {/* RIGHT */}

          <button
            onClick={nextProjects}
            disabled={startIndex + visibleProjects >= projects.length}
            className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all
            ${
              startIndex + visibleProjects >= projects.length
                ? "opacity-40 cursor-not-allowed border-gray-700"
                : "border-cyan-400 hover:bg-cyan-400 hover:text-black"
            }`}
          >
            <FaArrowRight />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Projects;