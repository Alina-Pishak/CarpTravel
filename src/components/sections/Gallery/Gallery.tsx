//@ts-nocheck
"use client";

import { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import BgContainer from "@/components/uiKit/BgContainer";
import Title from "@/components/uiKit/Title";

import gallery from "@/data/gallery.json";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import "./Gallery.css";
import clsx from "clsx";
import NavigationButton from "@/components/uiKit/NavigationButton";

export default function Gallery() {
  const swiperRef = useRef();

  return (
    <section id="gallery" className="gallery-bg">
      <BgContainer>
        <Title extraProps="mb-6">{gallery.title}</Title>
        {gallery.images.map(({ alt, imgMobile }, index) => (
          <Image
            src={imgMobile}
            alt={alt}
            width={280}
            height={187}
            key={index}
            className="mb-6 shadow-image ml-auto mr-auto md:hidden"
          />
        ))}
        <div className="hidden md:block">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            keyboard={{ enabled: true }}
            mousewheel={{ thresholdDelta: 70 }}
            spaceBetween={60}
            // loop={true}
            modules={[EffectCoverflow]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {gallery.images.map(({ alt, imgDesktop }, index) => (
              <SwiperSlide
                key={index}
                // className="w-[auto] h-[ auto]"
                style={{ width: "auto", height: "auto" }}
              >
                {/* <Image src={imgDesktop} alt={alt} width={415} height={296} /> */}
                <picture>
                  <source media="(min-width: 768px)" srcSet={imgDesktop} />
                  <img
                    src={imgDesktop}
                    alt={alt}
                    className=" md:w-[415px] xl:w-[606px]"
                  />
                </picture>
              </SwiperSlide>
            ))}
            <div className=" flex gap-[461px]  justify-evenly">
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
