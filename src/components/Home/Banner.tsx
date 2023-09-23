import React from "react";

export default function Banner() {
  return (
    <div className="md:h-[500px] xl:h-[600px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20 xl:max-w-inner max-w-4xl mx-auto">
      <div className="col-span-1  bg-primary relative">
        <img
          src="/illustration.png"
          alt="illustration"
          className="transform lg:scale-[1.30] lg:absolute left-10 z-10"
        />
      </div>
      <div className="col-span-1 bg-secondary relative flex items-center justify-center">
        <div className="w-[350px] h-[443px] flex flex-col items-center justify-center gap-12 shadow-2xl md:rounded-[60px]">
          <img src="/gift.png" alt="gift" />
          <p className="text-[26px] text-white">Join Giveways</p>
        </div>
      </div>
      <div className="col-span-1 bg-secondary relative flex items-center justify-start">
        <div className="w-[350px] h-[443px] flex flex-col items-center justify-center gap-12 shadow-2xl md:rounded-[60px]">
          <img src="/envato.png" alt="gift" />
          <p className="text-[26px] text-white">Join Giveways</p>
        </div>
      </div>
    </div>
  );
}
