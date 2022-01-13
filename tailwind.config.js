module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-start": "bounce 1s  3.5",
      },
      colors: {
        react: {
          100: "#53c1de",
        },
      },
      boxShadow: {
        "inner-xl": "inset 0 10px 10px 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};
