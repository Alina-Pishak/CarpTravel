"use client";

import { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

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
      <div className="bg-bgPrimary xl:bg-bgPrimaryDark">
        <BgContainer>
          <Title extraProps="mb-6">{gallery.title}</Title>
          {gallery.images.map(({ alt, imgMobile }, index) => (
            <Image
              alt={alt}
              src={imgMobile}
              key={index}
              width={280}
              height={187}
              className=" block mb-6 shadow-image ml-auto mr-auto md:hidden"
            />
          ))}
          <div className="hidden md:relative md:block md:ml-auto md:mr-auto">
            <Swiper
              loop={true}
              spaceBetween={24}
              slidesPerView={1}
              centeredSlides={true}
              className="md:w-[415px] md:h-[294px] xl:w-[606px] xl:h-[429px]"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {gallery.images.map(({ alt, imgDesktop }, index) => (
                <SwiperSlide key={index}>
                  <Image
                    alt={alt}
                    src={imgDesktop}
                    key={index}
                    width={280}
                    height={187}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="hidden md:flex md:gap-[461px] md:justify-evenly md:absolute md:z-50 md:bottom-[17px] md:right-0 md:left-0   xl:gap-[500px] xl:bottom-0">
              <NavigationButton onClick={() => swiperRef.current.slidePrev()}>
                BACK
              </NavigationButton>
              <NavigationButton onClick={() => swiperRef.current.slideNext()}>
                NEXT
              </NavigationButton>
            </div>
          </div>
        </BgContainer>
      </div>
    </section>
  );
}
