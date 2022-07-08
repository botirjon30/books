import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./swiper.css";

// import required modules
import { Scrollbar } from "swiper";
//assets
import AlisherNavoiy from "../../../assets/images/sectionOneSwiperBg.png"

export default function SectionOneSwiper() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  );
}

{/* <img src={AlisherNavoiy} alt="s1" /> */}