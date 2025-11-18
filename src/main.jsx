import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LiquidEther from "./components/LiquidEther.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <div id="global-bg"
      className="fixed inset-0 w-full h-full z-[-1] pointer-events-none"
    >
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        background="#05060B"
      />
    </div>

    <App />

  </React.StrictMode>
);
