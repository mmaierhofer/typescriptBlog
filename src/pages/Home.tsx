import React, { useEffect, useState } from "react";
import Preview from "../components/Preview";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import axios from "axios";
import basicsLogo from "../assets/category-react.png";
import hooksLogo from "../assets/hooks.png";
import ecosystemsLogo from "../assets/ecosystem.png";
import javascriptLogo from "../assets/javascript.png";

interface Post {
  content: {
    intro: string;
    title: string;
    image: string;
  };
  slug: string;
}

export default function Home() {
  const [posts, setPosts] = useState([]);

  const slideNum = getSlideNum(window.screen.width);

  useEffect(() => {
    axios
      .get(
        "https://api.storyblok.com/v1/cdn/stories?token=tehnPlIvhoncgaNSUju5Cwtt"
      )
      .then((response: any) => {
        setPosts(response.data.stories);
      });
  }, []);

  return (
    <>
      <div className="w-full flex justify-center flex-row">
        <div className="bg-white w-1/2 h-full h-min-20 pt-12 mb-32">
          <div className="ml-5">Popular Posts</div>

          <Swiper spaceBetween={50} slidesPerView={slideNum} loop={true}>
            {posts.map((post: Post) => {
              return (
                <SwiperSlide>
                  <Preview
                    title={post.content.title}
                    category={post.content.intro}
                    img={post.content.image}
                    slug={post.slug}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="ml-5 mt-8">Categories</div>
          <Swiper spaceBetween={50} slidesPerView={slideNum} loop={true}>
            <SwiperSlide>
              <Preview
                title={"React Basics"}
                category={"1 Items"}
                img={basicsLogo}
                slug={"react-basics"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Preview
                title={"InDepth Hooks"}
                category={"1 Items"}
                img={hooksLogo}
                slug={"react-basics"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Preview
                title={"React Ecosystem"}
                category={"1 Items"}
                img={ecosystemsLogo}
                slug={"react-basics"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Preview
                title={"Javascript"}
                category={"0 Items"}
                img={javascriptLogo}
                slug={"react-basics"}
              />
            </SwiperSlide>
          </Swiper>
          <Subscribe />
        </div>
      </div>

      <Footer />
    </>
  );
}

function getSlideNum(screenWidth: number) {
  if (screenWidth < 481) {
    return 1.5;
  } else if (screenWidth < 1000) {
    return 2.5;
  } else {
    return 3.5;
  }
}
