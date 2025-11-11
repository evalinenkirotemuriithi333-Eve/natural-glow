/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glow: {
          light: "#FDF7F4", // soft blush background
          beige: "#F8EDE3", // creamy tone
          rose: "#E3B7A0",  // warm neutral accent
          brown: "#6B4F4F", // elegant dark tone
          dark: "#3D2E2E",  // deep grounding color
        },
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};