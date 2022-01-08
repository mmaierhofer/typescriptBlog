import React from "react";
import Preview from "../components/Preview";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-white w-screen h-full h-min-20 pt-12 mb-32">
        <div className="ml-5">Popular Posts</div>

        <Swiper spaceBetween={50} slidesPerView={1.5}>
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
        <div className="ml-5 mt-8">Categories</div>
        <Swiper spaceBetween={50} slidesPerView={1.5}>
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

      <Footer />
    </>
  );
}
