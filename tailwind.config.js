/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lm: "240px",
      yd: "300px",
      rd: "384px",
      sm: "640px",
      md: "768px",
      cg: "843px",
      lg: "1024px",
      cr: "1060px",
      xl: "1440px",
    },
    extend: {
      colors: {
        navbarBg: '#AD0F14',
        aquaBg: '#0F9675',
      },
    },
  },
  plugins: [],
};