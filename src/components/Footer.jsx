import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/vednamde",
      color: "hover:text-[#C084FC]",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ved-namde/",
      color: "hover:text-[#6EE7F9]",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:vednamde@gmail.com",
      color: "hover:text-[#F472B6]",
    },
  ];

  return (
    <footer className="relative overflow-visible bg-transparent text-gray-400 py-10 border-t border-white/10 z-10">
      {/* === Animated Glow Background === */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(192,132,252,0.1),transparent_60%)]" />

      {/* === Content === */}
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Social Icons */}
        <motion.div
          className="flex gap-8 mb-5 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className={`transition-all duration-300 text-gray-400 ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Gradient Divider */}
        <div className="h-[2px] w-40 bg-gradient-to-r from-[#6EE7F9] via-[#C084FC] to-[#F472B6] rounded-full mb-6 opacity-70"></div>

        {/* Signature Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm sm:text-base font-light tracking-wide"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7F9] via-[#C084FC] to-[#F472B6] font-semibold">
            Ved Namde
          </span>{" "}
          | Built with 💙 using{" "}
          <span className="text-[#61dafb] font-medium">React</span>,{" "}
          <span className="text-[#38bdf8] font-medium">Tailwind</span>, and{" "}
          <span className="text-[#c084fc] font-medium">Framer Motion</span>
        </motion.p>

        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#6EE7F9]/40 via-[#C084FC]/40 to-[#F472B6]/40 blur-[2px]" />
      </div>
      <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-[#6EE7F9]/40 via-[#C084FC]/40 to-[#F472B6]/40 blur-[2px] animate-pulse"></div>
    </footer>
  );
}
