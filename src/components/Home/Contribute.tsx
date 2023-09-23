import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import "./style.css";
import { Button } from "@material-tailwind/react";

export default function Contribute() {
  const swiperRef = useRef(null);

  // Function to navigate to the previous slide
  const goToPrevSlide = () => {
    if (swiperRef.current) {
      // @ts-ignore
      swiperRef.current.slidePrev();
    }
  };

  // Function to navigate to the next slide
  const goToNextSlide = () => {
    if (swiperRef.current) {
      // @ts-ignore
      swiperRef.current.slideNext();
    }
  };

  SwiperCore.use([Navigation]);
  return (
    <div className="max-w-inner mx-auto my-[150px] pt-16 pb-20">
      <div className="relative px-2">
        <div className="flex flex-col items-center justify-center gap-8 mb-16">
          <p className="text-lg md:text-2xl">Are you want contribute?</p>
          <h2 className="text-2xl md:text-5xl font-semibold text-center">
            Submit your{" "}
            <span className="font-bold text-primary">own freebies</span>
          </h2>
        </div>
        <Swiper
          // @ts-ignore
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          // @ts-ignore
          cssMode={true}
          navigation={false}
          loop={true}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              width: 300,
            },
            // For screens larger than 640px but smaller than 1024px (tablet)
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation]}
          className="contribute-slider max-w-[300px] md:max-w-5xl xl:max-w-inner mx-auto px-2"
        >
          <SwiperSlide className="rounded-xl">
            <div className="w-[267px] h-[285px] flex flex-col items-center justify-center bg-white rounded-lg">
              <img
                src="/contribute/1st.png"
                alt=" 1"
                className="h-[110px] w-[110px] object-cover"
              />
              <p className="mt-14 text-lg md:text-2xl font-semibold">Moviet</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <div className="w-[267px] h-[285px] flex flex-col items-center justify-center bg-white rounded-lg">
              <img
                src="/contribute/2nd.png"
                alt=" 1"
                className="h-[110px] w-[110px] object-cover"
              />
              <p className="mt-14 text-2xl font-semibold">Moviet</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <div className="w-[267px] h-[285px] flex flex-col items-center justify-center bg-white rounded-lg">
              <img
                src="/contribute/3rd.png"
                alt=" 1"
                className="h-[110px] w-[110px] object-cover"
              />
              <p className="mt-14 text-2xl font-semibold">Moviet</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <div className="w-[267px] h-[285px] flex flex-col items-center justify-center bg-white rounded-lg">
              <img
                src="/contribute/4th.png"
                alt=" 1"
                className="h-[110px] w-[110px] object-cover"
              />
              <p className="mt-14 text-2xl font-semibold">Moviet</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <div className="w-[267px] h-[285px] flex flex-col items-center justify-center bg-white rounded-lg">
              <img
                src="/contribute/1st.png"
                alt=" 1"
                className="h-[110px] w-[110px] object-cover"
              />
              <p className="mt-14 text-2xl font-semibold">Moviet</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl">
            <div className="w-[267px] h-[285px] flex flex-col items-center justify-center bg-white rounded-lg">
              <img
                src="/contribute/1st.png"
                alt=" 1"
                className="h-[110px] w-[110px] object-cover"
              />
              <p className="mt-14 text-2xl font-semibold">Moviet</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute -bottom-20 left-0 right-0 flex justify-center gap-2 py-2">
          <div
            className="border border-gray-300 p-2 rounded-full cursor-pointer"
            onClick={goToPrevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
          <div
            className="border border-gray-300 p-2 rounded-full cursor-pointer"
            onClick={goToNextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-32 flex items-center justify-center">
        <Button className="bg-primary text-white text-lg md:text-xl md:py-6 py-4 px-14">
          Submit your file
        </Button>
      </div>
    </div>
  );
}
