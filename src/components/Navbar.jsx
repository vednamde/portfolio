import React from "react";

export default function Navbar() {
  const menu = ["About", "Projects", "Contact"];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-10 py-3 flex items-center gap-10 shadow-[0_0_30px_rgba(192,132,252,0.15)]">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7F9] via-[#C084FC] to-[#F472B6] font-bold text-xl">
        Ved<span className="text-gray-400">.</span>
      </h1>
      <ul className="flex gap-6 text-gray-300">
        {menu.map((item) => (
          <li
            key={item}
            onClick={() =>
              document
                .getElementById(item.toLowerCase())
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer hover:text-white relative after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#6EE7F9] after:to-[#C084FC] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
