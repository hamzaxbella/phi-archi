/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["38px", "48px"],
      "6xl": ["58px", "88px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        koho: ['"KoHo"', 'Inter'], // Add the KoHo font
      },
      fontWeight: {
        light: "300",
        normal: "400",
        bold: "700",
        extralight: "200",
      },

      textColor: {
        white: "#181818",
      },
      colors: {
        background: "#EAEAEA",
        dark: "#1F1F1E",
        gray: "#C5C5C5",
        light: "#D9D9D9",
      },
      boxShadow: {
        extra: "0 20px 70px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
}

