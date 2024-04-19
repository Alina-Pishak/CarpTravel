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
          "linear-gradient(180deg, rgba(0,24,38,0.7) 0%, rgba(0,37,49,0.1) 50%), url('/img/hero-bg-mobile-1x.jpg')",
        heroDesktop: "url('/img/hero-bg-1x.jpg')",
        aboutMobile: "url('/img/about-bg-mobile-1x.jpg')",
      },
      spacing: {
        10.5: "42px",
        11.5: "46px",
        13.2: "53px",
        26: "105px",
        27: "110px",
        39: "157px",
        45: "180px",
        70: "280px",
      },
      fontFamily: {
        primary: "Inter",
        secondary: "Karantina",
      },
      colors: {
        primary: "#fff",
        btn: "rgba(255, 255, 255, 0.1)",
        bgPrimary: "rgba(2, 15, 8, 0.5)",
        bgMobileMenu: "rgba(1, 10, 5, 0.75)",
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
