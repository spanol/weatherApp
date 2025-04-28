/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          red: "#B71C1C",
          standard: "#D32F2F",
        },
        secondary: {
          light: "#E57373",
          coral: "#FF8A80",
        },
        neutrals: {
          darkGray: "#212121",
          mediumGray: "#757575",
          lightGray: "#E0E0E0",
          white: "#FFFFFF",
        },
        alert: {
          red: "#F44336",
          success: "#388E3C",
        },
        light: "#767676",
        dark: {
          background: "#1a1a1a",
          surface: "#2d2d2d",
          text: "#e0e0e0",
          border: "#404040",
        }
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        h1: "32px",
        h2: "28px",
        h3: "24px",
        body: "16px",
        small: "14px",
      },
      spacing: {
        small: "8px",
        medium: "16px",
        large: "24px",
      },
      boxShadow: {
        card: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
