"use client";

import { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";

import BgContainer from "@/components/uiKit/BgContainer";
import Title from "@/components/uiKit/Title";
import NavigationButton from "@/components/uiKit/NavigationButton";

import gallery from "@/data/gallery.json";

import "swiper/css";
import "./Gallery.css";

export default function Gallery() {
  const swiperRef = useRef<any>();
  return (
    <section id="gallery" className="gallery-bg relative">
      <BgContainer bg="bg-bgPrimary xl:bg-bgPrimaryDark">
        <Title extraProps="mb-6">{gallery.title}</Title>
        {gallery.images.map(({ alt, imgMobile }, index) => (
          <picture
            key={index}
            className=" block mb-6 shadow-image ml-auto mr-auto md:hidden"
          >
            <source media="(max-width: 768px)" srcSet={imgMobile} />
            <img
              src={imgMobile}
              alt={alt}
              width={280}
              height={187}
              loading="lazy"
            />
          </picture>
        ))}
        <div className="hidden md:block ">
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            centeredSlides={true}
            className="w-auto"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {gallery.images.map(({ alt, imgDesktop }, index) => (
              <SwiperSlide key={index} className="slide-custom-">
                {({ isActive }) => (
                  <picture className="md:flex md:justify-center">
                    <source media="(min-width: 768px)" srcSet={imgDesktop} />
                    <img
                      src={imgDesktop}
                      alt={alt}
                      className={clsx(
                        isActive && "custom-slide-active ",
                        "slide-custom"
                      )}
                    />
                  </picture>
                )}
              </SwiperSlide>
            ))}
            <div className="hidden md:flex md:gap-[461px]  md:justify-evenly md:absolute md:z-50 md:bottom-[17px] md:right-0 md:left-0 xl:bottom-0">
              <NavigationButton onClick={() => swiperRef.current.slidePrev()}>
                BACK
              </NavigationButton>
              <NavigationButton onClick={() => swiperRef.current.slideNext()}>
                NEXT
              </NavigationButton>
            </div>
          </Swiper>
        </div>
      </BgContainer>
    </section>
  );
}
