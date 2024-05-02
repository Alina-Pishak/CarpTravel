"use client";

import { scroller } from "react-scroll";

import "./HeroButton.css";

type Props = {
  children: string;
};

export default function HeroButton({ children }: Props) {
  return (
    <button
      type="button"
      className="w-full h-[53px] relative font-bold cursor-pointer text-lg text-center bg-btn leading-[2.67] uppercase border border-transparent  hover:bg-bgHeaderBtnHover focus:bg-bgHeaderBtnHover transition-colors duration-300 hero-button md:bg-[rgba(255,255,255,0.05)] md:w-[230px] xl:text-[32px] xl:w-[293px] xl:h-[71px] xl:leading-none"
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
