/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      primary: "teal-500",
      grey: "slate-500",
    },
  },
  plugins: [],
};
