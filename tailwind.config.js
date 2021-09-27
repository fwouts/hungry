module.exports = {
  // mode: "jit",
  purge: ["./index.html", "./{design,pages,screens}/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      filter: ["hover"],
      brightness: ["hover"],
    },
  },
  plugins: [],
};
