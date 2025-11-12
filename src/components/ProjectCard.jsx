import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Play } from "lucide-react";

export default function ProjectCard({ project }) {
  const [showDemo, setShowDemo] = useState(false);

  // Close modal when clicking outside video
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowDemo(false);
    }
  };

  // ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setShowDemo(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* === PROJECT CARD === */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(192,132,252,0.15)] group"
      >
        {/* === MEDIA PREVIEW === */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-2xl">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              loading="lazy"
              className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-all duration-500"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-all duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
        </div>

        {/* === CONTENT === */}
        <div className="p-4 sm:p-5 flex flex-col gap-2 text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>

          <div className="flex justify-between items-center mt-4">
            <span className="text-[#6EE7F9] text-xs font-medium uppercase tracking-wide">
              {project.tag}
            </span>

            <div className="flex gap-3">
              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#C084FC]/10 border border-[#C084FC]/30 text-[#C084FC] hover:bg-[#C084FC]/20 transition-all"
              >
                <Github size={20} />
              </a>

              {/* Demo Button */}
              {project.video && (
                <button
                  onClick={() => setShowDemo(true)}
                  className="p-2 rounded-lg bg-[#6EE7F9]/10 border border-[#6EE7F9]/30 text-[#6EE7F9] hover:bg-[#6EE7F9]/20 transition-all"
                >
                  <Play size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* === DEMO MODAL === */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick} // click outside video closes modal
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90%] max-w-4xl mx-4 sm:mx-0 bg-[#0B0C10] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(110,231,249,0.2)] overflow-hidden"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside video
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDemo(false)}
                className="absolute top-4 right-4 text-gray-300 hover:text-white hover:scale-110 transition-all text-2xl font-bold z-50"
              >
                ✕
              </button>

              {/* Video Player */}
              <video
                src={project.video}
                controls
                autoPlay
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
