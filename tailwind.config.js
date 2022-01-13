module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FFD600",
        lightBlue: "#59B9FF",
        darkBlue: "#0F0A27",
        navy: "#000098",
        offWhite: "#F4F4F4",
        lightGrey: "#E3E3E3",
        darkGrey: "#232323",
        lightYellow: "#FCFF59",
        lightRed: "#FA5C5C",
        purple: "#8459FF",
      },
      fontFamily: {
        cursive: ["Satisfy", "cursive"],
        sans: ["Poppins", " sans-serif"],
      },
    },
  },
  plugins: [],
}
