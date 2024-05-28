/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        orange: "#FFED",
        lightyellow: "#F4F0D3",
        dark: "#FFC100",
      },

      backgroundImage: {
        gradient: "linear-gradient(-62deg, #C4E6FD, #ECF5D8)",
        gr: "linear-gradient(-62deg, #F6412D, #FFEC19)",
      },
    },
  },
  plugins: [],
};
