import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:'#38bdf8',
        secondary:'#bae6fd',
        dark:'#e5e5e5',
        text:'#a3a3a3',
        latar:'#f0f9ff',
      },
    },
  },
  plugins: [],
} satisfies Config;
