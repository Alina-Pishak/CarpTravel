"use client";

import { scroller } from "react-scroll";

type Props = {
  children: string;
};

export default function HeroButton({ children }: Props) {
  return (
    <button
      type="button"
      className="w-full h-[53px] relative font-bold text-lg text-center bg-btn leading-[2.67] uppercase border border-transparent  hover:bg-bgHeaderBtnHover focus:bg-bgHeaderBtnHover transition-colors duration-300 hero-button sm:bg-btnTablet"
      onClick={() =>
        scroller.scrollTo("contacts", {
          duration: 1500,
          delay: 100,
          smooth: true,
        })
      }
    >
      {children}
    </button>
  );
}
