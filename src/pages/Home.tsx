import React, { useEffect, useState } from "react";
import Preview from "../components/Preview";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import axios from "axios";

interface Post {
  content: {
    intro: string;
    title: string;
    image: string;
  };
}

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.storyblok.com/v1/cdn/stories?token=bkxE4bwzcFOSBb88o16kRgtt"
      )
      .then((response: any) => {
        setPosts(response.data.stories);
      });
  }, []);
  return (
    <>
      <div className="bg-white w-screen h-full h-min-20 pt-12 mb-32">
        <div className="ml-5">Popular Posts</div>

        <Swiper spaceBetween={50} slidesPerView={1.5}>
          {posts.map((post: Post) => {
            return (
              <SwiperSlide>
                <Preview
                  title={post.content.title}
                  category={post.content.intro}
                  img={post.content.image}
                />
              </SwiperSlide>
            );
          })}
          <SwiperSlide></SwiperSlide>
        </Swiper>
        <div className="ml-5 mt-8">Categories</div>
        <Swiper spaceBetween={50} slidesPerView={1.5}>
          {posts.map((post: Post) => {
            return (
              <SwiperSlide>
                <Preview
                  title={post.content.title}
                  category={post.content.intro}
                  img={post.content.image}
                />
              </SwiperSlide>
            );
          })}
          <SwiperSlide></SwiperSlide>
        </Swiper>
        <Subscribe />
      </div>

      <Footer />
    </>
  );
}
