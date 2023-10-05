import React from "react";

const Subscribe = () => {
  return (
    <div className="flex gap-3 md:gap-6 items-center relative h-[428px]">
      <img
        src="/subscribe/Capture.PNG"
        alt="card-image"
        className="h-full w-full object-cover"
      />
      <div className="absolute h-full w-full flex items-center justify-center text-white">
        <div className="flex flex-col gap-5">
          <h2 className="md:text-5xl text-2lg font-bold ">
            Sign Up for our Newslatter
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="relative max-w-[410px] mx-auto">
            <input
              type="text"
              placeholder="Enter your email"
              className="shadow-xl py-3 md:py-5 pl-6 md:pl-12 pr-16 w-full"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none bg-primary/50 text-white text-lg font-semibold m-2 px-3 ">
              Subscribe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;








