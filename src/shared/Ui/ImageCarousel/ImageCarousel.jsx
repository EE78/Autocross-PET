import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.jpg";
import pic5 from "./images/pic5.jpg";
import pic6 from "./images/pic6.jpg";
import pic7 from "./images/pic7.jpg";
import pic11 from "./images/pic11.jpg";
import pic12 from "./images/pic12.jpg";
import pic13 from "./images/pic13.jpg";
import pic14 from "./images/pic14.jpg";
import pic15 from "./images/pic15.jpg";

export const ImageCarousel = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={5}>
      <SwiperSlide>
        <img width="100%" height="100%" alt="" src={pic1} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" height="100%" alt="" src={pic2} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" height="100%" alt="" src={pic3} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" height="100%" alt="" src={pic4} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" height="100%" alt="" src={pic5} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" height="100%" alt="" src={pic6} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" height="100%" alt="" src={pic7} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" height="100%" alt="" src={pic11} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" height="100%" alt="" src={pic12} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" height="100%" alt="" src={pic13} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" height="100%" alt="" src={pic14} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" height="100%" alt="" src={pic15} />
      </SwiperSlide>
    </Swiper>
  );
};
