import React from "react";
import { FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const Achievements = () => {
  const data = [
    {
      title: "SSB Recommendation",
      highlight: "3-AFSB Gandhinagar",
      desc: "Recommended through Services Selection Board selection process.",
    },
    {
      title: "Defence Exams",
      highlight: "AFCAT-II & CDS-II 2025",
      desc: "Cleared both competitive defence examinations.",
    },
    {
      title: "UPSC NDA",
      highlight: "5 Times Qualified",
      desc: "Demonstrated consistency across multiple attempts.",
    },
    {
      title: "Aptitude Ranking",
      highlight: "Top 1000",
      desc: "Ranked among top candidates in national aptitude test.",
    },
    {
      title: "JEE Mains",
      highlight: "95.64 Percentile",
      desc: "Strong performance among nationwide competition.",
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-[#020617] text-center">

      <h2 className="text-3xl font-bold text-cyan-400 mb-16">
        Achievements
      </h2>

      <div className="max-w-3xl mx-auto px-6 text-left">

        <div className="relative border-l border-gray-700 pl-6 space-y-10">

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              

              {/* Content */}
              <div className="flex items-start gap-4">

                <FaTrophy className="text-cyan-400 mt-1" />

                <div>
                  <h3 className="text-gray-200 font-medium">
                    {item.title}
                  </h3>

                  <p className="text-cyan-400 font-semibold text-lg">
                    {item.highlight}
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    {item.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Achievements;