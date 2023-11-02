/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: [
    "dark",
    "cupcake",
  ],
  plugins: [
    require("daisyui"),

    require('@tailwindcss/forms'),
    
    ],
};
