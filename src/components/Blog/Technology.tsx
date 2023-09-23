import React from "react";
import TimeAndComment from "./TimeAndComment";

export default function Technology() {
  return (
    <div className="py-10">
      <div className="bg-white py-5 md:px-12 px-4 flex justify-between items-center">
        <h2 className="font-semibold capitalize text-xl md:text-3xl relative">
          <span>Technology</span>
          <div className="absolute -bottom-4 left-0 h-[6px] w-full bg-secondary"></div>
        </h2>
        <p className="text-primary text-xs md:text-base">View more Articles</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 py-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} className="col-span-1 flex flex-col bg-white">
            <div className="relative">
              <img
                src="/blog/technology.png"
                alt=""
                className="w-full h-full"
              />
              <div className="absolute right-7 -bottom-3 p-2 rounded-full bg-green-500">
                <img src="/blog/plus.png" alt="" className="h-4 w-4" />
              </div>
            </div>
            <div className="px-8 py-8 flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                How To Generate CC from BINS?
              </h2>
              <TimeAndComment />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
