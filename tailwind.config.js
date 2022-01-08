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
    },
  },
  plugins: [],
};
