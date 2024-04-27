"use client";
import Image from "next/image";

import BgContainer from "@/components/uiKit/BgContainer";
import Title from "@/components/uiKit/Title";

import gallery from "@/data/gallery.json";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-bg">
      <BgContainer>
        <Title extraProps="mb-6">{gallery.title}</Title>
        {gallery.images.map((img, index) => (
          <Image
            src={img}
            alt=""
            width={280}
            height={187}
            key={index}
            className="mb-6 shadow-image ml-auto mr-auto sm:hidden"
          />
        ))}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {gallery.images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="w-[415px] h-[293px]"
              style={{ width: "415px", height: "293px" }}
            >
              <Image src={img} alt="" width={415} height={296} />
            </SwiperSlide>
          ))}
        </Swiper>
      </BgContainer>
    </section>
  );
}
