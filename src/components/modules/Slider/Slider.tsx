//@ts-nocheck
"use client";

import { useRef } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";

import clsx from "clsx";

import Title from "@/components/uiKit/Title";
import BgContainer from "@/components/uiKit/BgContainer";
import SecondText from "@/components/uiKit/SecondText";

import "swiper/css";
import "swiper/css/effect-fade";
import "./Slider.css";

type Props = {
  title: string;
  data: {
    number: string;
    action: string;
    image: {
      alt: string;
      imgMobile: string;
      imgTablet: string;
      imgDesktop: string;
    };
    background: string;
    text: string;
    titles: string[];
  }[];
};

export default function Slider({ title, data }: Props) {
  const swiperRef = useRef();
  const pagination = {};
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      // pagination={{
      //   el: ".custom-pagination",
      //   type: "bullets",
      //   clickable: true,
      //   bulletClass: "slider-pagination-text",
      //   bulletActiveClass: "slider-pagination-text-active",
      //   bulletElement: "p",
      //   renderBullet: function (index: number, className: string) {
      //     return `<p class="${className}"> ${data[index].titles[index]}</p>`;
      //   },
      // }}
      modules={[Pagination, EffectFade]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      className="relative"
    >
      {data.map(
        ({ number, action, image, background, text, titles }, index) => (
          <SwiperSlide
            key={index}
            id="swiperSlide"
            className={`${background} bg-cover `}
          >
            <BgContainer>
              <div className="services-layout">
                <div className=" custom-pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal "></div>
                <Title extraProps="services-title">{title}</Title>
                <h5 className="font-thin text-5xl text-right mb-4 md:text-6xl md:leading-[1.2] md:text-start services-subtitle xl:text-8xl xl:text-start">
                  {number.padStart(2, "0")} /
                  <span className="opacity-20">
                    {data.length.toString().padStart(2, "0")}
                  </span>
                </h5>
                {/* </div> */}
                {/* <div className=" md:flex md:gap-6"> */}
                {/* <Image
                  alt=""
                  src={image}
                  width={280}
                  height={213}
                  className="mb-3 md:w-[463px] md:h-[370px] services-image xl:w-[607] xl:h-[429]"
                /> */}
                {/* <div className="mb-3 md:w-[463px]  services-image xl:w-[607px]"> */}
                <picture className="w-full mb-3 md:w-[463px]  services-image xl:w-[607px] ">
                  <source
                    media="(min-width: 1280px)"
                    srcSet={image.imgDesktop}
                  />
                  <source media="(min-width: 768px)" srcSet={image.imgTablet} />
                  <source media="(max-width: 768px)" srcSet={image.imgMobile} />
                  <img src={image.imgMobile} alt={image.alt} />
                </picture>
                {/* </div> */}
                {/* <div className=" md:block"> */}
                <p className="text-right ml-auto mb-6 text-xs leading-loose tracking-2 font-extralight  md:text-xs md:leading-loose md:tracking-2 md:font-extralight md:mb-[34px] md:ml-0 md:text-start services-action">
                  {action}
                </p>
                {/* <div className=" custom-pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal "></div> */}
                <ul className="mb-[53px] md:mb-[25px] services-list ">
                  {titles.map((title, i) => (
                    <li key={i} className="mb-4 last:mb-0">
                      <p
                        className={clsx(
                          "font-extralight text-xl uppercase w-44 leading-none flex items-center gap-2 md:text-[22px] md:leading-[0.8] md:w-50 xl:text-[28px] xl:w-[253px] cursor-pointer opacity-75 transition-opacity hover:opacity-100 ",
                          i === index &&
                            "font-medium before:block before:w-[6px] before:h-[6px] before:bg-primary before:rotate-45 opacity-[1]"
                        )}
                        onClick={() => swiperRef.current.slideTo(i)}
                      >
                        {title}
                      </p>
                    </li>
                  ))}
                </ul>
                {/* <p className=" hidden md:block md:text-xs md:leading-loose md:tracking-2 md:font-extralight md:mb-[34px]">
                  {action}
                </p> */}
                <SecondText extraProps="w-70  md:w-[221px] md:text-[13px] md:leading-[1.56]  services-text xl:w-[293px]">
                  {text}
                </SecondText>
                {/* </div> */}
              </div>
            </BgContainer>
          </SwiperSlide>
        )
      )}
      {/* <div className=" custom-pagination"></div> */}
    </Swiper>
  );
}
