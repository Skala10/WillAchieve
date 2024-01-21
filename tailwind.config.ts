import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      // "hero-bg": "url('/main-photo.webp')",
      "hero-bg-small": "url('/main-photo-small.webp')",
    },
    screens: {
      lg: "1440px",
      md: "768px",
      mdlg: "850px",
      sm: "320px",
    },
    container: {
      center: true,
      padding: {
        lg: "3.875rem",
        md: "2rem",
        sm: "1rem",
      },
    },
    colors: {
      "light-blue": "#36A9E1",
      blue: "#195ca0",
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
}
export default config
