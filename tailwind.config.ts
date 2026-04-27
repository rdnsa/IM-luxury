import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./presentation/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"]
      },
      colors: {
        luxury: {
          black: "#0A0A0A",
          white: "#F8F6F2",
          beige: "#E7D9C8",
          gold: "#B89C6D",
          slate: "#1A1A1A"
        }
      },
      boxShadow: {
        luxury: "0 20px 50px -24px rgba(0, 0, 0, 0.55)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 40%), radial-gradient(circle at 80% 80%, rgba(184,156,109,0.12), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
