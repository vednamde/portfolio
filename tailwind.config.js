module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient1: "#6EE7F9",
        gradient2: "#C084FC",
        gradient3: "#F472B6",
        accent: "#C084FC",
        secondary: "#6EE7F9",
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        pink: {
          500: "#ec4899",
        },
        blue: {
          500: "#3b82f6",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 20px 60px -15px rgba(139, 92, 246, 0.4), 0 10px 30px -10px rgba(139, 92, 246, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'magnetic': '0 4px 20px rgba(139, 92, 246, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        magnetic: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(5px, -5px) rotate(1deg)' },
          '50%': { transform: 'translate(-3px, 3px) rotate(-1deg)' },
          '75%': { transform: 'translate(3px, 3px) rotate(0.5deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        magnetic: 'magnetic 0.6s ease-in-out',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};
