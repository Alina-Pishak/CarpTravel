"use client";

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import Text from "./Text";
import clsx from "clsx";

type Props = {
  data: {
    number: string;
    action: string;
    image: string;
    background: string;
    text: string;
    titles: string[];
  }[];
};

export default function Slider({ data }: Props) {
  const swiper = useSwiper();
  console.log(swiper);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map(
        ({ number, action, image, background, text, titles }, index) => (
          <SwiperSlide key={number}>
            <h5 className="font-thin text-5xl text-right mb-4">
              {number.padStart(2, "0")} /{" "}
              <span className="opacity-20">
                {data.length.toString().padStart(2, "0")}
              </span>
            </h5>
            <Image
              alt=""
              src={image}
              width={280}
              height={213}
              className="mb-3"
            />
            <p className="text-right ml-auto mb-6 text-xs leading-[200%] tracking-[0.2em] font-extralight">
              {action}
            </p>
            <ul className="mb-13.2">
              {titles.map((title, i) => (
                <li key={i} className="mb-4 last:mb-0">
                  <p
                    className={clsx(
                      "font-extralight text-xl uppercase w-44 leading-none flex items-center gap-2",
                      i === index &&
                        "font-medium before:block before:w-[6px] before:h-[6px] before:bg-primary before:rotate-45"
                    )}
                    onClick={() => swiper.slideTo(i)}
                  >
                    {title}
                  </p>
                </li>
              ))}
            </ul>
            <Text extraProps="w-70">{text}</Text>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
