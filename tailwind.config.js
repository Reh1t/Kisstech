/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "variant-background": "#003061",
        "gray-1": "#9f9f9f",
        "border-1": "#eaeeff",
        "border-2": "#d0dbff",
        text: "#828284",
        accent: "#3aa9e9",
        primary: "#050509",
        secondary: "#58585b",
        "main-background": "#f3f5fc",
        darkslategray: "#38383d",
        gray: {
          "100": "#1e1e1e",
          "200": "#09090a",
          "300": "rgba(21, 40, 61, 0.5)",
        },
        tomato: "#ee5a28",
        steelblue: "#005a8d",
        black: "#000",
        gainsboro: "#d9dbe3",
        goldenrod: "rgba(252, 190, 72, 0.65)",
        "dark-blue": "#15283d",
      },
      spacing: {},
      fontFamily: {
        "heading-2": "'DM Sans'",
        inherit: "inherit",
        "heading-heading-4": "Merriweather",
        "body-body-2": "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "80xl": "99px",
        xl: "20px",
        mini: "15px",
        "31xl": "50px",
        "980xl": "999px",
        "61xl": "80px",
        "21xl": "40px",
      },
    },
    fontSize: {
      base: "16px",
      mid: "17px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      sm: "14px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      "17xl": "36px",
      "3xl": "22px",
      xs: "12px",
      smi: "13px",
      "25xl": "44px",
      "16xl": "35px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
