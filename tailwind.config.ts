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
      },
    },
  },
  plugins: [],
}
export default config
