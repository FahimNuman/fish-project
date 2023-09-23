import React from "react";

export default function LatestEducation() {
  return (
    <div className="flex flex-col gap-6">
      <div className="py-5">
        <h2 className="font-semibold capitalize text-xl relative">
          <span>Latest Education News</span>
          <div className="absolute -bottom-4 left-0 w-full flex">
            <div className="h-[5px] w-1/4 bg-secondary"></div>
            <div className="h-[4px] w-3/4 bg-gray-300"></div>
          </div>
        </h2>
      </div>
      <div className="flex flex-col gap-7">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="w-full">
              <img
                src="/blog/edu-latest.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <p className="text-sm font-semibold">Schoolarship News</p>
            <p className="font-semibold tracking-tighter">
              Delhi govt to offer science schoolarship of Rs, 5,000 to class
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
