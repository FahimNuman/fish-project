import { Button } from "@material-tailwind/react";
import React from "react";

export default function SocialCard() {
  return (
    <div className="flex flex-col gap-3 md:gap-7">
      <div className="flex flex-col gap-2 md:gap-8">
        <div className="flex items-center gap-2">
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
          <p className="text-sm md:text-base hover:text-blue-500">Freebie Publications</p>
        </div>
        <div className="flex items-center gap-2">
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
          <p className="text-sm md:text-base hover:text-blue-500">Premium Products</p>
        </div>
        <div className="flex items-center gap-2">
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
          <p className="text-sm md:text-base hover:text-blue-500">Freelance Services</p>
        </div>
        <div className="flex items-center gap-2">
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
          <p className="text-sm md:text-base hover:text-blue-500">Privacy Policy</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Button className="w-[140px] px-4 md:w-[167px] bg-[#4099FF] text-white rounded-none flex items-center gap-2 whitespace-nowrap">
          <img src="/home/twitter.png" alt="twitter" />
          <span>Follow us 68k</span>
        </Button>
        <Button className="w-[140px] px-4 md:w-[167px] bg-[#3B5998] text-white rounded-none flex items-center gap-2">
          <img src="/home/facebook.png" alt="twitter" />
          <span>Like Us 300k</span>
        </Button>
      </div>
    </div>
  );
}
