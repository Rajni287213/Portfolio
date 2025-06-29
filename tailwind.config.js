/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        backgroundImage: {
        "skills-gradient": "linear-gradient(90deg, #bae9b4 10%, #f5d8d7 50%, #bae9b4 50%, #f5d8d7 100%)",
        "project-gradient": "linear-gradient(135deg, #ff9a9e 0%, #bff6d2 100%)",
      },
    },
  },

  plugins: [],
};
