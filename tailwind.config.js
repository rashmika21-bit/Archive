import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(77, 56, 35, 0.08)",
        lift: "0 24px 80px rgba(77, 56, 35, 0.12)",
      },
      colors: {
        accent: "#D4A373",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [typography],
};
