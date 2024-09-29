import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#0174BE",
          dark: "#0C356A",
        },
        yellow: {
          light: "#FFF0CE",
          dark: "#FDDE55",
        },
        "carmine-red": "#ff4e42",
        "golden-yellow": "#ffc300",
        "sky-blue": "#4fc3f7",
        "grey-dark": "#34495E",
        "emerald-green": "#2ecc71",
        grey: {
          dark: "#2c3e50",
          light: "#bcc3c7",
        },
        beige: "#f5d7bb",
      },
    },
  },
  plugins: [],
}
export default config
