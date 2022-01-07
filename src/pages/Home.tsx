import React from "react";
import Preview from "../components/Preview";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <>
      <div className="bg-white w-screen h-full h-min-20 pt-12">
        <Swiper spaceBetween={60} slidesPerView={1.5}>
          <SwiperSlide>
            <Preview />
          </SwiperSlide>
          <SwiperSlide>
            <Preview />
          </SwiperSlide>
          <SwiperSlide>
            <Preview />
          </SwiperSlide>
        </Swiper>
        <Subscribe />
      </div>
    </>
  );
}
