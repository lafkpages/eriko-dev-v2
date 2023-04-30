/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Satoshi"],
      },
      colors: {
        dark: "#141516ff",
        light: "#f9f9f4ff",
        red: "#ef3054ff",
        blue: "#574ae2ff",
        aquamarine: "#56e39fff",
        cyan: "#26f0f1ff",
      },
    },
  },
  plugins: [],
};
