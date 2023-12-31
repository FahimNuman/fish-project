import React from "react";

export default function Cards() {
  return (
    <div className="md:max-w-5xl mx-auto mt-5 mb-10 px-4 py-10">
      <div className="flex gap-14 flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col justify-between gap-5 w-[230px] h-[450px]">
          <img
            src="/elearning/card1.png"
            alt="card"
            className="h-[273px] w-[210px] "
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
        <div className="flex flex-col justify-between gap-5 w-[230px] h-[450px]">
          <img
            src="/elearning/card2.png"
            alt="card"
            className="h-[273px] w-[210px] "
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
        <div className="flex flex-col justify-between gap-5 w-[230px] h-[450px]">
          <img
            src="/elearning/card3.png"
            alt="card"
            className="h-[273px] w-[210px] "
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
