import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BiSolidMessageAlt } from "react-icons/bi";

export default function Carousel() {
  return (
    <div className="relative">
      <img src="/blog/latest-carousel.png" alt="" className="w-full h-full" />
      <div className="absolute left-0 md:bottom-12 bottom-3 md:px-12 px-4 flex flex-col gap-3">
        <p className="text-sm">Science</p>
        <h3 className="font-bold text-xl md:text-3xl capitalize">
          Unique study of isolated bobcat population confirms accuracy of
          extinction model
        </h3>
        <div className="flex items-center gap-6 text-xs max-w-full">
          <div className="flex items-center gap-2">
            <AiFillClockCircle />
            <span>1 month ago</span>
          </div>
          <div className="flex items-center gap-2">
            <BiSolidMessageAlt />
            <span>67</span>
          </div>
        </div>
      </div>
    </div>
  );
}
