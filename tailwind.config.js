/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styled-components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      lightblack: "#0E0E0E",
      textwhite: "#fff",
      footerBannerStart: "#FFCC97",
      footerBannerEnd: "#D5D9C5",
    },
    // extend: {
    //   keyframes: {
    //     marquee: {
    //       "0%": {
    //         transform: "translateX(0)",
    //       },
    //       "100%": {
    //         transform: "translateX(-100%)",
    //       },
    //     },
    //   },
    //   animation: {
    //     marquee: "marquee 3s linear infinite",
    //   },
    // },
    extend: {
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(50%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      width: {
        200: "200%",
      },
    },
  },
  plugins: [],
};
