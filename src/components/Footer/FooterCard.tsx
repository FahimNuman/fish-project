import React from "react";

export default function FooterCard() {
  return (
    <>
      <div className="flex gap-3 md:gap-6 items-center">
        <div className="md:p-3 p-2 rounded-full bg-white md:w-[57px] w-[40px] md:h-[57px] h-[40px] ">
          <img src="/hat-color.png" alt="hat" />
        </div>
        <div className="flex flex-col text-white">
          <p className="font-semibold md:text-[17px] text-[14px]">
            All Freebies
          </p>
          <p className="text-[14px] md:text-[17px]">100% Verified</p>
        </div>
      </div>
      <div className="flex gap-3 md:gap-6 items-center">
        <div className="md:p-3 p-2 rounded-full bg-white md:w-[57px] w-[40px] md:h-[57px] h-[40px] ">
          <img src="/hat-color.png" alt="hat" />
        </div>
        <div className="flex flex-col text-white">
          <p className="font-semibold md:text-[17px] text-[14px]">200k+ </p>
          <p className="text-[14px] md:text-[17px]">Members</p>
        </div>
      </div>
      <div className="flex gap-3 md:gap-6 items-center">
        <div className="md:p-3 p-2 rounded-full bg-white md:w-[57px] w-[40px] md:h-[57px] h-[40px] ">
          <img src="/hat-color.png" alt="hat" />
        </div>
        <div className="flex flex-col text-white">
          <p className="font-semibold md:text-[17px] text-[14px]">30000+</p>
          <p className="text-[14px] md:text-[17px]">Totall Downloads</p>
        </div>
      </div>
      <div className="flex gap-3 md:gap-6 items-center">
        <div className="md:p-3 p-2 rounded-full bg-white md:w-[57px] w-[40px] md:h-[57px] h-[40px] ">
          <img src="/hat-color.png" alt="hat" />
        </div>
        <div className="flex flex-col text-white">
          <p className="font-semibold md:text-[17px] text-[14px]">500000+</p>
          <p className="text-[14px] md:text-[17px]">Have item</p>
        </div>
      </div>
    </>
  );
}