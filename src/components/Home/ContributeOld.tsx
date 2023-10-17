import { Carousel, IconButton } from "@material-tailwind/react";
import React from "react";

export default function ContributeOld() {
  return (
    <div className="max-w-inner mx-auto py-[200px]">
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-2xl">Are you want contribute?</p>
        <h2 className="text-5xl font-semibold">
          Submit your{" "}
          <span className="font-bold text-primary">own freebies</span>
        </h2>
      </div>
      <Carousel
        className="rounded-xl"
        navigation={() => <div className="hidden"></div>}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            size="sm"
            onClick={handlePrev}
            className="!absolute bottom-0 left-[46%] text-black -translate-y-2/4 border-2 border-gray-800 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            size="sm"
            onClick={handleNext}
            className="!absolute  bottom-0 right-[46%] text-black -translate-y-2/4 border-2 border-gray-800 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <div className="w-[267px] h-[285px] flex flex-col items-center justify-center bg-white rounded-lg">
          <img
            src="/contribute/1st.png"
            alt=" 1"
            className="h-[110px] w-[110px] object-cover"
          />
          <p className="mt-14 text-2xl font-semibold">Movie</p>
        </div>
        <div className="w-[267px] h-[285px] flex flex-col items-center justify-center bg-white rounded-lg">
          <img
            src="/contribute/2nd.png"
            alt=" 1"
            className="h-[110px] w-[110px] object-cover"
          />
          <p className="mt-14 text-2xl font-semibold">Movie</p>
        </div>
        <div className="w-[267px] h-[285px] flex flex-col items-center justify-center bg-white rounded-lg">
          <img
            src="/contribute/3rd.png"
            alt=" 1"
            className="h-[110px] w-[110px] object-cover"
          />
          <p className="mt-14 text-2xl font-semibold">Movie</p>
        </div>
        <div className="w-[267px] h-[285px] flex flex-col items-center justify-center bg-white rounded-lg">
          <img
            src="/contribute/4th.png"
            alt=" 1"
            className="h-[110px] w-[110px] object-cover"
          />
          <p className="mt-14 text-2xl font-semibold">Movie</p>
        </div>
      </Carousel>
    </div>
  );
}
