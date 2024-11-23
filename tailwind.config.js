module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./content/**/*.{html,js}",
    "./static/**/*.{html,js}",
    "./archetypes/**/*.{html,js}",
    "./themes/**/*.{html,js}",
    "./data/**/*.{html,js}",
    "./config.*",
    "./resources/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
