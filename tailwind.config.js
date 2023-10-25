import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        "light",
        "dark",
        "cupcake, dracula, forest, hacker, punk, synthwave, vscode, zen",
      ],
    },
  },
  plugins: [daisyui],
};
