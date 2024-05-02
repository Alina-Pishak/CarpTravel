"use client";

import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
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
  const swiperRef = useRef<any>();
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      modules={[Pagination, EffectFade]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      className="h-[851px] md:h-auto"
    >
      {data.map(
        ({ number, action, image, background, text, titles }, index) => (
          <SwiperSlide key={index} className={`${background} bg-cover `}>
            <BgContainer bg="bg-bgPrimaryLight">
              <div className="services-layout">
                <div className=" custom-pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal "></div>
                <Title extraProps="services-title">{title}</Title>
                <h5 className="font-thin text-5xl text-right mb-4 md:text-6xl md:leading-[1.2] md:text-start services-subtitle xl:text-8xl xl:text-start">
                  {number.padStart(2, "0")} /
                  <span className="opacity-20">
                    {data.length.toString().padStart(2, "0")}
                  </span>
                </h5>
                <picture className="w-full mb-3 md:w-[463px]  services-image xl:w-[607px] ">
                  <source
                    media="(min-width: 1280px)"
                    srcSet={image.imgDesktop}
                  />
                  <source media="(min-width: 768px)" srcSet={image.imgTablet} />
                  <source media="(max-width: 768px)" srcSet={image.imgMobile} />
                  <img src={image.imgMobile} alt={image.alt} loading="lazy" />
                </picture>
                <p className="text-right ml-auto mb-6 text-xs leading-loose tracking-2 font-extralight  md:text-xs md:leading-loose md:tracking-2 md:font-extralight md:mb-[34px] md:ml-0 md:text-start services-action">
                  {action}
                </p>
                <ul className="mb-[53px] md:mb-[25px] services-list ">
                  {titles.map((title, i) => (
                    <li key={i} className="mb-4 last:mb-0">
                      <p
                        className={clsx(
                          "font-extralight text-xl uppercase w-45 leading-none flex items-center gap-2 md:text-[22px] md:leading-[0.8] md:w-50 xl:text-[28px] xl:w-[253px] cursor-pointer opacity-75 transition-opacity hover:opacity-100 focus:opacity-100",
                          i === index &&
                            "font-medium w-48 before:block before:w-[6px] before:h-[6px] before:bg-primary before:rotate-45 opacity-[1]"
                        )}
                        onClick={() => swiperRef.current.slideTo(i)}
                      >
                        {title}
                      </p>
                    </li>
                  ))}
                </ul>
                <SecondText extraProps="w-70  md:w-[221px] md:text-[13px] md:leading-[1.56]  services-text xl:w-[293px]">
                  {text}
                </SecondText>
              </div>
            </BgContainer>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
