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
  title: string;
  data: {
    number: string;
    action: string;
    image: string;
    background: string;
    text: string;
    titles: string[];
  }[];
};

export default function Slider({ title, data }: Props) {
  const swiper = useSwiper();
  console.log(swiper);

  return (
    <Swiper
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
              <div className="hidden sm:flex sm:justify-between">
                <Title>{title}</Title>
                <h5 className="font-thin text-5xl text-right mb-4 sm:text-6xl sm:leading-[1.2]">
                  {number.padStart(2, "0")} /{" "}
                  <span className="opacity-20">
                    {data.length.toString().padStart(2, "0")}
                  </span>
                </h5>
              </div>
              <div className="hidden sm:flex sm:gap-6">
                <Image
                  alt=""
                  src={image}
                  width={280}
                  height={213}
                  className="mb-3 w-[463px]"
                />
                <div className="hidden sm:block">
                  <p className="text-right ml-auto mb-6 text-xs leading-loose tracking-2 font-extralight sm:hidden">
                    {action}
                  </p>
                  <ul className="mb-[53px] sm:mb-[25px]">
                    {titles.map((title, i) => (
                      <li key={i} className="mb-4 last:mb-0">
                        <p
                          className={clsx(
                            "font-extralight text-xl uppercase w-44 leading-none flex items-center gap-2 sm:text-[22px] sm:leading-[0.8] sm:w-55",
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
                  <p className=" hidden sm:block sm:text-xs sm:leading-loose sm:tracking-2 sm:font-extralight sm:mb-[34px]">
                    {action}
                  </p>
                  <Text extraProps="w-70 sm:w-55">{text}</Text>
                </div>
              </div>
            </BgContainer>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
