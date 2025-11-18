import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Particles from "./Particles";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "FinGuard AI",
      desc: "AI model predicting company financial health using XGBoost and SHAP explainability. Real-time visualization dashboard built with Streamlit.",
      tag: "Machine Learning",
      video: "/media/finguard.mp4",
      github: "https://github.com/vednamde/Finguard-Ai",
    },
    {
      id: 2,
      title: "AI Market Price Predictor",
      desc: "Streamlit app analyzing 10K+ agricultural records to predict fair crop prices using ML models.",
      tag: "Data Science",
      image: "/media/market price.png",
      github: "https://github.com/vednamde/AI-SUSTAINABLE-PROJECT",
    },
    {
      id: 3,
      title: "Watchlistify",
      desc: "Smart movie tracker web app with interactive recommendations and media previews.",
      tag: "Web App",
      video: "/media/watchlistify.mp4",
      github: "https://github.com/vednamde/Watchlistify",
    },
    {
      id: 4,
      title: "Joi – Offline Voice AI",
      desc: "Offline AI assistant built with Flask and Ollama for fast, local, voice-based interaction.",
      tag: "AI",
      video: "/media/joi.mp4",
      github: "https://github.com/vednamde/joi-voice-ai",
    },
    {
      id: 5,
      title: "ADR Prediction Dashboard",
      desc: "Full-stack React + Flask dashboard predicting adverse drug reactions with 85% accuracy.",
      tag: "Full Stack",
      image: "/media/adr/adr1.png",
      github: "https://github.com/vednamde/data-science",
    },
    {
      id: 6,
      title: "Smoothie Cake Shop",
      desc: "Full PHP e-commerce site with authentication, admin panel, and cart functionality.",
      tag: "Full Stack",
      video: "/media/cake_management.mp4",
      github: "https://github.com/vednamde/cake_management",
    },
  ];

  return (
    <section id="projects" className="relative py-28 bg-[#0F111A] overflow-hidden">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* Soft glows */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] bg-[#6EE7F9]/10 rounded-full blur-[250px] top-[-200px] left-[-250px]" />
        <div className="absolute w-[800px] h-[800px] bg-[#C084FC]/10 rounded-full blur-[250px] bottom-[-250px] right-[-200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7F9] via-[#C084FC] to-[#F472B6] animate-gradient"
        >
          Featured Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-[#6EE7F9]/40 via-[#C084FC]/40 to-[#F472B6]/40 blur-[2px] animate-pulse"></div>
    </section>
  );
}
