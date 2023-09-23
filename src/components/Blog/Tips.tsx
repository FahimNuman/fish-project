import React from "react";
import TimeAndComment from "./TimeAndComment";

export default function Tips() {
  return (
    <div className="my-8">
      <div className="bg-white py-5 md:px-12 px-2 flex justify-between items-center">
        <h2 className="font-semibold capitalize text-xl md:text-3xl relative">
          <span>Tips and Trics</span>
          <div className="absolute -bottom-4 left-0 h-[6px] w-full bg-secondary"></div>
        </h2>
        <p className="text-primary text-xs md:text-base">View more Articles</p>
      </div>
      <div className="flex flex-col gap-8 mt-8">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center md:gap-6 gap-3">
            <div className="h-[184.66px] w-[327px] ">
              <img src="/blog/tips.png" alt="" className="w-full h-full" />
            </div>
            <div className="flex flex-col md:gap-4 gap-2 md:pr-16 pr-1">
              <h2 className="text-lg md:text-2xl font-semibold">
                Bio-Health donates 5% of all website sales to KSS Air Ambulance
              </h2>
              <TimeAndComment />
              <p className="text-sm">
                Bio-Health donates 5% of all website sales to KSS Air Ambulance
                Bio-Health donates 5% of all website sales to KSS Air Ambulance
              </p>
              <p className="text-sm font-semibold">Continue Reading</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
