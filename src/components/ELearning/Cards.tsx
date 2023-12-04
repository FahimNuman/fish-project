import React from "react";

export default function Cards() {
  return (
    <div className="xl:max-w-layout md:max-w-4xl mx-auto mt-5 mb-10 px-4 ">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col justify-between gap-7 w-[290px] h-[450px]">
          <img
            src="/elearning/card1.png"
            alt="card"
            className="min-h-[225px] max-h-[300px] "
          />
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold leading-9 ">
              Enroll any course apply Coupon discount code.
            </p>
            <div className="">
              <button className="bg-primary px-3 py-2 text-white rounded-lg">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-7 w-[290px] h-[450px]">
          <img
            src="/elearning/card2.png"
            alt="card"
            className="min-h-[225px] max-h-[300px] "
          />
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold leading-9 ">
              Downloading premium courses for free.
            </p>
            <div className="">
              <button className="bg-secondary px-3 py-2 text-white rounded-lg">
                Download Free
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-7 w-[290px] h-[450px]">
          <img
            src="/elearning/card3.png"
            alt="card"
            className="min-h-[225px] max-h-[300px] "
          />
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold leading-9">
              Buy Recomanded or sponsored courses.
            </p>
            <div className="">
              <button className="bg-primary px-3 py-2 text-white rounded-lg">
                Buy Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}