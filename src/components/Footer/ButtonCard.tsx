import { Button } from "@material-tailwind/react";
import React from "react";

export default function ButtonCard() {
  return (
    <div className="flex flex-col gap-3 md:gap-7">
      <div className="flex flex-col gap-2 md:gap-8">
        <div className="flex items-center gap-1 md:gap-2">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <p className="text-sm md:text-base">Freebie Publications</p>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <p className="text-sm md:text-base">Premium Products</p>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <p className="text-sm md:text-base">Freelance Services</p>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <p className="text-sm md:text-base">Privacy Policy</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-6">
        <Button className="w-[140px] px-4 md:w-[167px] bg-primary text-white rounded-none flex items-center gap-1 md:gap-2">
          <span className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </span>
          <span>Join Us 1.5M</span>
        </Button>
        <Button className="w-[140px] px-4 md:w-[167px] bg-[#F6610C] text-white rounded-none flex items-center gap-1 md:gap-2">
          <img src="/home/twitter.png" alt="twitter" />
          <span>Join Us 1.5M</span>
        </Button>
      </div>
    </div>
  );
}
