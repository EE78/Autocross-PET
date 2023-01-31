import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const ImageCarousel = ({ src }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      <SwiperSlide>
        <img alt="" src={src} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src={src} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src={src} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src={src} />
      </SwiperSlide>
    </Swiper>
  );
};
