import { Button } from "@material-tailwind/react";
import React from "react";

const EnrollCourse = () => {
  return (
    <div className="xl:max-w-inner md:max-w-5xl mx-auto mt-12 mb-16 px-2 relative overflow-hidden">
      {/* --------vector */}
      <div className="absolute left-48 top-80 h-full w-full -z-10 hidden md:block">
        <img
          src="/enroll/vector.png"
          alt=""
          className="w-[550px] h-[1100px] "
        />
      </div>
      <div className="absolute left-60 top-[450px] -z-10 hidden md:block">
        <img
          src="/enroll/dot1.png"
          alt=""
          //   className="w-[550px] h-[1100px] "
        />
      </div>
      <div className="absolute left-[275px] top-[1320px] -z-10 hidden md:block">
        <img
          src="/enroll/dot2.png"
          alt=""
          //   className="w-[550px] h-[1100px] "
        />
      </div>
      <div className="">
        <div className="grid md:grid-cols-2 grid-cols-1">
          {/* Image on the left */}
          <div className="col-span-1 xl:w-[650px] w-[250px] xl:h-[650px] h-[350px] mt-10 md:mt-0 mb-4 md:mb-0">
            {" "}
            {/* Add mb-4 for margin below the image */}
            <img src="/enroll/cou[pon.png" alt="person" />
          </div>

          {/* Text on the right */}
          <div className="col-span-1 flex flex-col gap-9 justify-center ml-4 mt-4 md:mt-0">
            {" "}
            {/* Add mt-4 for margin above the text */}
            <h2 className="text-2xl md:text-4xl flex items-end gap-2">
              <span className="">Enroll any course</span>
            </h2>
            <div className="text-2xl md:text-4xl flex items-end gap-2">
              <p className="leading-8 md:leading-10">apply Coupon</p>
            </div>
            <div className="text-2xl md:text-4xl flex items-end gap-2">
              <p className="leading-8 md:leading-10">discount code.</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-blue-700">Join with us</p>
              <div className="flex gap-2">
                <img
                  src="/about/facebook.png"
                  alt="facebook"
                  className="w-6 h-6 cursor-pointer"
                />
                <div className="p-[4px] border rounded-full border-gray-800 cursor-pointer">
                  <img src="/about/insta.png" alt="instagram" />
                </div>
                <img
                  src="/about/linkedin.png"
                  alt="linkedin"
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full flex">
              <Button className="bg-primary rounded-full px-14 py-3">
                Apply Coupon
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1">
          {/* Text on the left */}
          <div className="col-span-1 flex flex-col gap-9 justify-center mr-4">
            <h2 className="text-2xl md:text-4xl flex items-end gap-2">
              <span className="">Downloading</span>
            </h2>
            <div className="text-2xl md:text-4xl flex items-end gap-2">
              <p className="leading-8 md:leading-10">premium courses</p>
            </div>
            <div className="text-2xl md:text-4xl flex items-end gap-2">
              <p className="leading-8 md:leading-10">for free.</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-blue-700">Join with us</p>
              <div className="flex gap-2">
                <img
                  src="/about/facebook.png"
                  alt="facebook"
                  className="w-6 h-6 cursor-pointer"
                />
                <div className="p-[4px] border rounded-full border-gray-800 cursor-pointer">
                  <img src="/about/insta.png" alt="instagram" />
                </div>
                <img
                  src="/about/linkedin.png"
                  alt="linkedin"
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full flex">
              <Button className="bg-primary rounded-full px-14 py-3">
                Download Now
              </Button>
            </div>
          </div>

          {/* Image on the right */}
          <div className="col-span-1 xl:w-[650px] w-[250px] xl:h-[650px] h-[350px] mt-10 md:mt-0 mb-4 md:mb-0">
            <img src="/enroll/downloadfree.png" alt="person" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1">
          {/* Image on the left */}
          <div className="col-span-1 xl:w-[650px] w-[250px] xl:h-[650px] h-[350px] mt-10 md:mt-0 mb-4 md:mb-0">
            {" "}
            {/* Add mb-4 for margin below the image */}
            <img src="/enroll/buyrecommandcourse.png" alt="person" />
          </div>

          {/* Text on the right */}
          <div className="col-span-1 flex flex-col gap-9 justify-center ml-4 mt-4 md:mt-0">
            {" "}
            {/* Add mt-4 for margin above the text */}
            <h2 className="text-2xl md:text-4xl flex items-end gap-2">
              <span className="">Enroll any course</span>
            </h2>
            <div className="text-2xl md:text-4xl flex items-end gap-2">
              <p className="leading-8 md:leading-10">apply Coupon</p>
            </div>
            <div className="text-2xl md:text-4xl flex items-end gap-2">
              <p className="leading-8 md:leading-10">discount code.</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-blue-700">Join with us</p>
              <div className="flex gap-2">
                <img
                  src="/about/facebook.png"
                  alt="facebook"
                  className="w-6 h-6 cursor-pointer"
                />
                <div className="p-[4px] border rounded-full border-gray-800 cursor-pointer">
                  <img src="/about/insta.png" alt="instagram" />
                </div>
                <img
                  src="/about/linkedin.png"
                  alt="linkedin"
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full flex">
              <Button className="bg-primary rounded-full px-14 py-3">
                Buy Course
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollCourse;
