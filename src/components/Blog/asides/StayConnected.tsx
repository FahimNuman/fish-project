import React from "react";

export default function StayConnected() {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <div className="py-5 w-full">
        <h2 className="font-semibold capitalize text-xl relative">
          <span>Stay Connected</span>
          <div className="absolute -bottom-4 left-0 w-full flex">
            <div className="h-[5px] w-2/5 bg-secondary"></div>
            <div className="h-[4px] w-3/5 bg-gray-300"></div>
          </div>
        </h2>
      </div>
      <div className="mb-2 md:mb-0">
        <div className="flex flex-wrap gap-2 justify-center">
          <div className="bg-blue-800 p-4 flex flex-col gap-1 items-center justify-center">
            <div className="w-[12px] h-[25px] ">
              <img src="/blog/facebook.png" className="w-full h-full" alt="" />
            </div>
            <p className="text-xs">120,5674</p>
            <p className="text-[8px]">fans</p>
          </div>
          <div className="bg-red-600 p-4 flex flex-col gap-1 items-center justify-center">
            <div className="w-[25px] h-[17px] ">
              <img src="/blog/youtube.png" className="w-full h-full" alt="" />
            </div>
            <p className="text-xs">120,5674</p>
            <p className="text-[8px]">fans</p>
          </div>
          <div className="bg-pink-500 p-4 flex flex-col gap-1 items-center justify-center">
            <div className="w-[22px] h-[22px] ">
              <img src="/blog/insta.png" className="w-full h-full" alt="" />
            </div>
            <p className="text-xs">120,5674</p>
            <p className="text-[8px]">fans</p>
          </div>
          <div className="bg-blue-400 p-4 flex flex-col gap-1 items-center justify-center">
            <div className="w-[24px] h-[19px] ">
              <img src="/blog/tweet.png" className="w-full h-full" alt="" />
            </div>
            <p className="text-xs">120,5674</p>
            <p className="text-[8px]">fans</p>
          </div>
          <div className="bg-red-200 p-4 flex flex-col gap-1 items-center justify-center">
            <div className="w-[30px] h-[19px] ">
              <img src="/blog/google.png" className="w-full h-full" alt="" />
            </div>
            <p className="text-xs">120,5674</p>
            <p className="text-[8px]">fans</p>
          </div>
          <div className="bg-orange-400 p-4 flex flex-col gap-1 items-center justify-center">
            <div className="w-[30px] h-[20px] ">
              <img src="/blog/cloud.png" className="w-full h-full" alt="" />
            </div>
            <p className="text-xs">120,5674</p>
            <p className="text-[8px]">fans</p>
          </div>
        </div>
      </div>
    </div>
  );
}
