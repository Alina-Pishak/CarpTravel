"use client";

import Image from "next/image";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import clsx from "clsx";

import Text from "@/components/uiKit/Text";
import Title from "@/components/uiKit/Title";
import BgContainer from "@/components/uiKit/BgContainer";

import "swiper/css";

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
      // spaceBetween={50}
      slidesPerView={1}
      loop={true}
      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
      // modules={[Pagination, Navigation]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map(
        ({ number, action, image, background, text, titles }, index) => (
          <SwiperSlide
            key={index}
            id="swiperSlide"
            className={`${background} bg-cover`}
          >
            <BgContainer>
              <Title>sdfsdfs</Title>
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
              <p className="text-right ml-auto mb-6 text-xs leading-[2] tracking-2] font-extralight">
                {action}
              </p>
              <ul className="mb-[53px]">
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
            </BgContainer>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
