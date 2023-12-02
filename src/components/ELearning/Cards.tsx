import React from "react";

export default function Cards() {
  return (
    <div className="xl:max-w-layout md:max-w-5xl mx-auto mt-5 mb-10 px-2 ">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col justify-center gap-5 w-[300px] h-[500px] pt-4">
          <img src="/elearning/card1.png" alt="card" />
          <p className="text-2xl font-semibold leading-9">
            Enroll any course apply Coupon discount code.
          </p>
          <div className="">
            <button className="bg-primary px-3 py-2 text-white rounded-lg">
              Apply Coupon
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 w-[300px] h-[500px]">
          <img src="/elearning/card2.png" alt="card" className="" />
          <p className="text-2xl font-semibold leading-9 mt-6">
            Downloading premium courses for free.
          </p>
          <div className="">
            <button className="bg-secondary px-3 py-2 text-white rounded-lg">
              Download Free
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 w-[300px] h-[500px]">
          <img src="/elearning/card3.png" alt="card" className="-mt-12" />
          <p className="text-2xl font-semibold leading-9 mt-5">
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
  );
}
