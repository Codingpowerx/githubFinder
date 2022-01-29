module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  content: [],
  theme: {
    extend: {},
  },
  variants: {
    extends: {},
  },
  plugins: [require("daisyui")],
};
