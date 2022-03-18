const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      ...{
        monako: {
          1: "#252C2B",
          2: "#1A4D4D",
          3: "#43894F",
          4: "#CFB045",
          5: "#E0692F",
          white: "#F0FFF0",
        },
      },
    },
    extend: {
      fontFamily: {
        abril: ["Abril Fatface"],
        Yekan: ["iranyekan"],
        Takhte: ["takhte"],
      },
    },

    animation: {
      tranDTU: "tranDTU 1s",
      tranUTD: "tranUTD 1s",
      show: "show 1s",
    },
    keyframes: {
      show: {
        "0%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        },
      },
      tranDTU: {
        "0%": {
          opacity: 0,
          transform: "translateY(50%)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
      tranUTD: {
        "0%": {
          opacity: 0,
          transform: "translateY(-50%)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
    },
  },
  plugins: [],
  important: true,
};
