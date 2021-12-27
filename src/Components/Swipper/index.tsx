import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

interface ISwapperProps {
  cards: React.ReactNode[];
}

export default function Swipper({ cards }: ISwapperProps) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {cards.map((card, i) => (
        <SwiperSlide key={i}>{card}</SwiperSlide>
      ))}
    </Swiper>
  );
}
