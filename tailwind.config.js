/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        138: "60rem",
      },
      colors: {
        "bibot-primary": "#40ccc3",
        "bibot-secondary": "#c95def",
        "bibot-white": "#ffffff",
        "bibot-black": "#1e1e1e",
        "bibot-gray": "#2b2b2b20",
        "bibot-red": "#fdd1d1",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
