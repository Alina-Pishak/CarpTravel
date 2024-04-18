import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroMobile:
          "linear-gradient(180deg, rgba(0, 24, 38, 0.5) 0%, rgba(0, 37, 49, 0.5) 100%), url('/img/hero-bg-mobile-1x.jpg')",

        heroDesktop:
          "linear-gradient(180deg, rgba(0, 24, 38, 0.5) 0%, rgba(0, 37, 49, 0.5) 100%), url('/img/hero-bg-1x.jpg')",
      },
      backdropBlur: {
        xl: "50px",
      },
      spacing: {
        11: "43px",
        13: "53px",
        26: "105px",
        27: "110px",
        38: "157px",
        68: "280px",
      },
      fontFamily: {
        primary: "Inter",
        secondary: "Karantina",
      },
      colors: {
        primary: "#fff",
        btn: "rgba(255, 255, 255, 0.1)",
      },
      letterSpacing: {
        "1": "-0.04em",
        "2": "0.18em",
        // "2": "0.025em",
        // "3": "0.05em",
        // "4": "0.1em",
      },
      fontSize: {
        xxs: ["10px", "1.6"],
        l: ["40px", "1.4"],
      },
    },
  },
  plugins: [],
};
export default config;
