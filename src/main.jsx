import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import LiquidEther from "./components/LiquidEther.jsx";
import Particles from "./components/Particles.jsx";

import "./index.css";
import "./components/LiquidEther.css";
import "./components/Particles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* 🌈 GLOBAL LIQUID BACKGROUND */}
    <div id="global-bg" className="fixed inset-0 -z-50 pointer-events-none">
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={120}
        autoDemo={true}
        autoSpeed={0.4}
        autoIntensity={2.5}
        resolution={0.5}
        isViscous={false}
        background="#000000"
      />
    </div>

    {/* 🎇 GLOBAL PARTICLES */}
    <div id="global-particles" className="fixed inset-0 -z-40 pointer-events-none">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>

    <App />

  </React.StrictMode>
);
