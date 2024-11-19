import type { Config } from "tailwindcss";
import { KoHo } from 'next/font/google'; // Import your desired Google Font
import { Inter } from 'next/font/google'; // Import your desired Google Font

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background : "#EAEAEA",
        layer : "#C5C5C5",
        dark : "#1F1F1E",
        white : "#D9D9D9"
      },
      fontFamily : {
        KoHo: ['var(--font-koho)', 'sans-serif'], // Use the CSS variable
        Inter: ['var(--font-inter)', 'sans-serif'], // Use the CSS variable
      },
      fontWeight : {
        light : "300",
        normal : "400",
        bold : "700",
        extralight : "200",
      }

    },
  },
  plugins: [],
};
export default config;
