import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiTableau,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiStreamlit,
  SiGithub,
} from "react-icons/si";
import { FaBrain, FaChartLine, FaChartBar } from "react-icons/fa";
import LightRays from "./LightRays";
import "./LightRays.css";

export default function About() {
  const skills = [
    { name: "Python", icon: <SiPython className="text-yellow-400" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Pandas", icon: <SiPandas className="text-pink-400" /> },
    { name: "NumPy", icon: <SiNumpy className="text-sky-400" /> },
    { name: "scikit-learn", icon: <SiScikitlearn className="text-orange-400" /> },
    { name: "Power BI", icon: <FaChartBar className="text-yellow-400" /> },
    { name: "Tableau", icon: <SiTableau className="text-indigo-400" /> },
    { name: "Streamlit", icon: <SiStreamlit className="text-red-400" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
  ];

  return (
    <section
      id="about"
      className="relative py-28 text-center overflow-hidden bg-transparent"
    >
      {/* LIGHT RAYS BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.6]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* GRADIENT GLOW BEHIND RAYS */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute w-[600px] h-[600px] bg-[#6EE7F9]/10 blur-[200px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[600px] h-[600px] bg-[#C084FC]/10 blur-[200px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* CONTENT (z-index 10 so it stays on top) */}
      <div className="relative z-10">
        {/* === Title === */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7F9] via-[#C084FC] to-[#F472B6]"
        >
          About Me
        </motion.h2>

        {/* === Description === */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed mb-12 md:mb-16 px-4"
        >
          My name is <span className="text-[#6EE7F9] font-semibold">Ved Namde</span>.
          The thing that has always fascinated me is how things work internally — whether it's
          an <span className="text-[#C084FC]">operating system</span>, a
          <span className="text-[#F472B6]"> data pipeline</span>, or a
          <span className="text-[#6EE7F9]"> machine learning model</span>.
          This curiosity drives me to explore, learn, and build something new all the time.
          <br />
          I'm passionate about transforming raw data into actionable insights and designing intelligent systems
          that merge creativity with logic. My work blends AI, data science, and visualization into meaningful solutions.
        </motion.p>

        {/* === Skills Section === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto px-6"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#6EE7F9] mb-8 md:mb-10">Skills & Tools</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15, y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:shadow-[0_0_35px_rgba(192,132,252,0.25)] transition-all"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-sm text-gray-300 font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FLOATING DECOR ICONS */}
      <motion.div
        className="absolute top-20 left-10 z-20 text-[#6EE7F9]/30 text-6xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaBrain />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 z-20 text-[#C084FC]/30 text-6xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <FaChartLine />
      </motion.div>
      <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-[#6EE7F9]/40 via-[#C084FC]/40 to-[#F472B6]/40 blur-[2px] animate-pulse"></div>
    </section>
  );
}
