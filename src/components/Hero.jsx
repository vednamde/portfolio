import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black"
    >
      {/* ======= Background Video ======= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10"
      >
        <source src="/media/bg-tech.mp4" type="video/mp4" />
      </video>

      {/* ======= Overlay (for better text visibility) ======= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0B0C10]/80 to-black/90 -z-10"></div>



      {/* ======= Profile Image ======= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-8 md:mb-10 rounded-full overflow-hidden border-4 border-[#6EE7F9]/60 shadow-[0_0_80px_rgba(110,231,249,0.4)]"
      >
        <img
          src="/media/profile.jpg"
          alt="Ved Namde"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* ======= Name ======= */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7F9] via-[#C084FC] to-[#F472B6] drop-shadow-[0_0_40px_rgba(110,231,249,0.6)]"
      >
        Ved Namde
      </motion.h1>

      {/* ======= Subtitle ======= */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 z-10 font-light tracking-wide px-4"
      >
        AI & Data Science Enthusiast | Crafting Scalable Intelligence
      </motion.p>

      {/* ======= Buttons ======= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 z-20 px-4"
      >
        <button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 sm:px-8 py-3 text-black font-semibold rounded-xl bg-gradient-to-r from-[#6EE7F9] to-[#C084FC] hover:shadow-[0_0_20px_rgba(192,132,252,0.5)] transition-all duration-300 text-sm sm:text-base"
        >
          View Projects
        </button>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 sm:px-8 py-3 text-white font-semibold rounded-xl border border-[#C084FC]/50 hover:bg-gradient-to-r hover:from-[#C084FC] hover:to-[#F472B6] hover:text-black shadow-[0_0_30px_rgba(192,132,252,0.3)] transition-all duration-300 text-sm sm:text-base"
        >
          Get in Touch
        </button>

        <a
          href="/media/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 sm:px-8 py-3 text-white font-semibold rounded-xl border border-[#F472B6]/50 hover:bg-gradient-to-r hover:from-[#F472B6] hover:to-[#6EE7F9] hover:text-black shadow-[0_0_30px_rgba(244,114,182,0.3)] transition-all duration-300 text-sm sm:text-base text-center"
        >
          Resume
        </a>
      </motion.div>

      {/* ======= Subtle Glow Line ======= */}
      <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-[#6EE7F9]/40 via-[#C084FC]/40 to-[#F472B6]/40 blur-[2px] animate-pulse"></div>
    </section>
  );
}
