import React, { useState } from "react";

const Subscribe = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleClick = () => {
    setIsSubscribed(!isSubscribed);
  };

  const buttonStyle = {
    backgroundColor: isSubscribed ? "red" : "rgba(255, 0, 0, 0.4)",
    color: "white",
  };

  return (
    <div className="flex gap-3 md:gap-6 items-center relative h-[428px]">
      <img
        src="/subscribe/Capture.PNG"
        alt="card"
        className="h-full w-full object-cover"
      />
      <div className="absolute h-full w-full flex items-center justify-center text-white">
        <div className="flex flex-col gap-5 mt-20 px-2">
          <h2 className="md:text-5xl text-2xl text-center font-bold">
            Sign Up For Our Newsletter
          </h2>
          <p  className="text-center">
            The Next Level Journey
          </p>
          <div className="relative md:w-[650px] w-[310px] mx-auto">
            <input
              type="text"
              placeholder="Enter your email"
              className="shadow-xl py-3 md:py-5 pl-6 md:pl-12 pr-16 w-full -z-10 text-black"
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center text-base md:text-lg font-semibold m-2 px-3 z-10"
              style={buttonStyle}
              onClick={handleClick}
            >
              {isSubscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
