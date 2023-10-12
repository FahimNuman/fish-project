import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";

export default function Hero() {
  return (
    <div className="relative -top-[75px] right-0">
      <div className="relative min-h-[500px] max-w-inner lg:max-w-none">
        {/* hero carousel */}

        <Swiper
          // @ts-ignore
          centeredSlides={true}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          speed={3000}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="hero-slide !hidden md:!block md:max-w-layout -z-10"
        >
          <SwiperSlide>
            <img className="h-auto" src="/hero/hero.svg" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-auto" src="/hero/hero-2.png" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-auto" src="/hero/hero-3.png" alt="hero" />
          </SwiperSlide>
        </Swiper>
        <div className="flex w-full h-full absolute left-0 top-0 mt-20 z-10">
          <div className="w-inner mx-auto h-full flex justify-center flex-col pl-3">
            <h2 className="text-xl md:text-3xl text-black relative inline-block">
              Anything You Like Is Free
              <img
                src="/hat-color.png"
                alt="hat"
                className="absolute -top-4 md:-top-5 left-[80%] md:left-[30%] h-8 w-13"
              ></img>
            </h2>
            <h1 className="md:text-[64px] text-[30px] font-semibold">
              Exciting
              <span className="text-primary">Contents</span>
            </h1>
            <p className="text-lg md:text-2xl max-w-[491.12px]">
              Our mission is to help people save money online
            </p>
            <div className="relative max-w-[410px] mt-16">
              <input
                type="text"
                placeholder="Search your need"
                className="rounded-full shadow-xl py-3 md:py-5 pl-6 md:pl-12 pr-16 w-full -z-10"
              />
              <button className="absolute inset-y-0 right-0 flex items-center bg-primary text-white m-1 px-3 rounded-full cursor-pointer z-10">
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
              </button>
            </div>
            <div className="flex gap-4 mt-24">
              <div className="h-[2px] my-auto w-[71px] bg-primary "></div>
              <p className="">Join us our comunity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
