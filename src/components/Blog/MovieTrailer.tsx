import React from "react";
import Carousel from "./Carousel";
import Health from "./Health";
import Tips from "./Tips";
import Technology from "./Technology";
import Education from "./Education";
import LatestEducation from "./asides/LatestEducation";
import TopNews from "./asides/TopNews";
import Tags from "./asides/Tags";
import PopularPost from "./asides/PopularPost";
import { Button, Input } from "@material-tailwind/react";
import StayConnected from "./asides/StayConnected";

export default function MovieTrailer() {
  return (
    <div className="max-w-inner mx-auto">
      <div>
        <div className="bg-white py-5 md:px-12 px-4 flex">
          <h2 className="font-semibold capitalize text-xl md:text-3xl relative">
            <span>Latest Movie Trailer</span>
            <div className="absolute -bottom-4 left-0 h-[6px] w-full bg-secondary"></div>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 md:gap-4 gap-2 mt-6 mb-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="col-span-1 relative">
              <img
                src="/blog/latest-movie-2.png"
                alt=""
                className="w-full h-full"
              />
              <div className="absolute bottom-6 leading-6 left-0 capitalize text-sm px-7 text-white">
                peter jackson reveals sneak peak of the beatless: get back
              </div>
              <div className="w-[33px] h-[33px] absolute right-8 top-5">
                <img
                  src="/blog/latest-movie-icon.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-4">
        <div className="md:col-span-9">
          <Carousel />
          <Health />
          <Tips />
          <div className="md:px-14 px-4 relative md:py-8 py-4 bg-white rounded-sm">
            <img src="/blog/tips-add.png" alt="" className="w-full h-full" />
            <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center md:text-3xl">
              Ads
            </div>
          </div>
          <Technology />
          <Education />
        </div>
        <div className="md:col-span-3">
          <aside className="flex justify-center flex-col">
            <div className=" bg-white p-4 mx-auto">
              <img
                src="/blog/add-red.png"
                alt=""
                className="w-[252.24px] h-[207.3]"
              />
            </div>
            <LatestEducation />
            <TopNews />
            <Tags />
            <PopularPost />
            <div className="bg-white px-6 py-10 mt-12">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-[32px] h-[29px] ">
                  <img src="/blog/fly.png" alt="" />
                </div>
                <h2 className="text-xl font-semibold text-center">
                  Subscribe to Our Newsletter
                </h2>
                <div className="flex flex-col gap-3">
                  <div className="max-w-full">
                    <input
                      type="text"
                      placeholder="Enter Email Address"
                      className="border-2 py-3 pl-8 pr-10 w-full placeholder:text-gray-700 placeholder:text-sm"
                    />
                  </div>
                  <Button className="bg-red-600 w-full rounded-none capitalize">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs w-full text-center">
                  Don't worry, we won't spam
                </p>
              </div>
            </div>
            <StayConnected />
          </aside>
        </div>
      </div>
    </div>
  );
}
