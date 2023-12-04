import React from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";
import { Link } from "react-router-dom";

const HeroELearning = () => {
  // Check if the screen width is below a certain breakpoint (e.g., 768px)
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="relative -top-[75px] right-0">
      <div className="relative min-h-[500px] max-w-inner lg:max-w-none">
        {/* hero carousel */}
        {isMobile ? ( // Conditionally render Swiper on mobile devices
          <Swiper
            // @ts-ignore
            centeredSlides={true}
            effect="fade"
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            speed={1500}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            className="hero-slide !hidden md:!block md:max-w-5xl xl:max-w-none"
          >
            <SwiperSlide>
              <img className="h-auto" src="/elearning/" alt="hero" />
            </SwiperSlide>
          </Swiper>
        ) : (
          // Render hero image for non-mobile devices
          <img className="h-auto" src="/elearning/hero.png" alt="hero" />
        )}
        <div className="flex w-full h-full absolute left-0 top-0 mt-20">
          <div className="w-inner mx-auto h-full flex justify-center flex-col pl-3">
            <h2 className="text-xl md:text-5xl text-black relative inline-block font-semibold">
              Online learning is
              <img
                src="/hat-color.png"
                alt="hat"
                className="absolute -top-4 md:-top-5 left-[80%] md:left-[30%] h-8 w-8 font-semibold"
              ></img>
            </h2>
            <h1 className="text-xl md:text-5xl text-black relative inline-block font-semibold">
              not the next
              <p className="text-lg md:text-5xl max-w-[491.12px] font-semibold">
                big thing,
              </p>
            </h1>
            <p className="text-lg md:text-5xl max-w-[491.12px] font-semibold">
              it is right now big thing.
            </p>
            <div className="relative max-w-[410px] mt-16">
              <input
                type="text"
                disabled
                placeholder="Join Our Telegram Group"
                className="rounded-full shadow-xl py-3 md:py-5 pl-6 md:pl-12 pr-16 w-full -z-10 disabled:bg-white disabled:placeholder:text-black"
              />
              <button className="absolute inset-y-0 right-0 flex items-center text-white m-1 px-2 rounded-full cursor-pointer z-10">
                <img
                  src={process.env.PUBLIC_URL + "/teligram/telegram.png"}
                  alt=""
                ></img>
              </button>
            </div>
            {/* <div className="relative max-w-[410px] mt-16">
              <input
                type="text"
                placeholder="Search Your Need"
                className="rounded-full shadow-xl py-3 md:py-5 pl-6 md:pl-12 pr-16 w-full"
              />
              <span className="absolute inset-y-0 right-0 flex items-center  bg-primary text-white m-1 px-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 md:w-8 h-5 md:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroELearning;