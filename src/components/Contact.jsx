import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) icon

export default function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: <Mail className="w-8 h-8 text-[#6EE7F9]" />,
      link: "mailto:vednamde@gmail.com",
      desc: "vednamde@gmail.com",
    },
    {
      name: "GitHub",
      icon: <Github className="w-8 h-8 text-[#C084FC]" />,
      link: "https://github.com/vednamde",
      desc: "@vednamde",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-8 h-8 text-[#F472B6]" />,
      link: "https://linkedin.com/in/ved-namde-9a5b15270",
      desc: "Ved Namde",
    },
    {
      name: "X (Twitter)",
      icon: <FaXTwitter className="w-8 h-8 text-[#93C5FD]" />,
      link: "https://x.com/Ved_Namde",
      desc: "@Ved_Namde",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-[#0B0C10] via-[#0F1624] to-[#0B0C10] overflow-hidden"
    >
      {/* Background Lights */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-[#6EE7F9]/15 rounded-full blur-[140px] top-20 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#C084FC]/15 rounded-full blur-[140px] bottom-20 right-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7F9] via-[#C084FC] to-[#F472B6]"
        >
          Let’s Connect
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg mt-4 mb-16"
        >
          I’m always open to collaborations, projects, and creative discussions.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center">
          {contacts.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative rounded-2xl bg-[#101820]/80 backdrop-blur-lg shadow-[0_0_30px_rgba(192,132,252,0.15)] border border-white/10 p-8 hover:shadow-[0_0_40px_rgba(110,231,249,0.25)] transition-all"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-1 text-white">{item.name}</h3>
              <p className="text-gray-400 mb-6">{item.desc}</p>

              {/* Connect Button */}
              <motion.a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(192,132,252,0.6)",
                }}
                className="inline-block px-6 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-[#6EE7F9] via-[#C084FC] to-[#F472B6] shadow-lg transition-all"
              >
                Connect
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Send Message Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <a
            href="mailto:vednamde@gmail.com"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-black rounded-full bg-gradient-to-r from-[#6EE7F9] via-[#C084FC] to-[#F472B6] shadow-[0_0_30px_rgba(192,132,252,0.4)] hover:scale-105 transition-transform"
          >
            ✉️ Send Me a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
