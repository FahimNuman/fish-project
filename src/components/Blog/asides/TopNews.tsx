import { Rating } from "@material-tailwind/react";
import React from "react";
import { AiFillClockCircle } from "react-icons/ai";

export default function TopNews() {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <div className="py-5 w-full">
        <h2 className="font-semibold capitalize text-xl relative">
          <span>Top Views News</span>
          <div className="absolute -bottom-4 left-0 w-full flex">
            <div className="h-[5px] w-2/5 bg-secondary"></div>
            <div className="h-[4px] w-3/5 bg-gray-300"></div>
          </div>
        </h2>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <div className="w-full">
            <img src="/blog/latest-news.png" alt="" className="w-full h-full" />
          </div>
          <p className="font-semibold tracking-tighter">
            Delhi govt to offer science schoolarship of Rs, 5,000 to class
          </p>
          <div className="flex items-center gap-6 text-xs max-w-full">
            <div className="flex items-center gap-2">
              <AiFillClockCircle />
              <span>1 month ago</span>
            </div>
            <div className="">
              <Rating value={5} className="!text-[5px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[3px] bg-gray-300 w-full"></div>
      <div className="flex flex-col">
        <div>
          <div className="flex gap-x-5">
            <div className="w-[86px] h-[86px]">
              <img src="/blog/news-little.png" alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">
                Post one to two blog articles a week
              </p>
              <div className="flex items-center text-xs max-w-full gap-2">
                <div className="flex items-center gap-2">
                  <AiFillClockCircle />
                  <span>1 month ago</span>
                </div>
                <div className="">
                  <Rating
                    value={5}
                    className="!text-[5px] font-semibold rating-custom"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[2px] p bg-gray-300 w-full my-6"></div>
        </div>
        <div>
          <div className="flex gap-x-5">
            <div className="w-[86px] h-[86px]">
              <img src="/blog/news-little.png" alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">
                Post one to two blog articles a week
              </p>
              <div className="flex items-center text-xs max-w-full gap-2">
                <div className="flex items-center gap-2">
                  <AiFillClockCircle />
                  <span>1 month ago</span>
                </div>
                <div className="">
                  <Rating
                    value={5}
                    className="!text-[5px] font-semibold rating-custom"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[2px] p bg-gray-300 w-full my-6"></div>
        </div>
        <div>
          <div className="flex gap-x-5">
            <div className="w-[86px] h-[86px]">
              <img src="/blog/news-little.png" alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">
                Post one to two blog articles a week
              </p>
              <div className="flex items-center text-xs max-w-full gap-2">
                <div className="flex items-center gap-2">
                  <AiFillClockCircle />
                  <span>1 month ago</span>
                </div>
                <div className="">
                  <Rating
                    value={5}
                    className="!text-[5px] font-semibold rating-custom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
